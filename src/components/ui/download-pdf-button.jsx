import React, { useState } from "react";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadPDFButton = ({ contentId, fileName = "download.pdf" }) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleDownloadPDF = async () => {
    setIsExporting(true);
    const content = document.getElementById(contentId);

    // Add PDF-specific styles before generating
    const bioText = content.querySelector(".text-lg.text-gray-700");
    if (bioText) {
      bioText.style.marginLeft = "20px";
      bioText.style.marginRight = "20px";
    }

    try {
      const canvas = await html2canvas(content, {
        scale: 2,
        useCORS: true,
        logging: false,
        imageTimeout: 0,
        backgroundColor: "#ffffff",
        removeContainer: true,
        windowWidth: content.scrollWidth,
        windowHeight: content.scrollHeight,
      });

      // Reset styles after canvas generation
      if (bioText) {
        bioText.style.marginLeft = "";
        bioText.style.marginRight = "";
      }

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm (subtracting margins)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const pdf = new jsPDF({
        unit: "mm",
        format: "a4",
        compress: false,
      });

      // Calculate the number of pages needed
      const pageCount = Math.ceil(imgHeight / pageHeight);

      // Add image to each page
      for (let page = 0; page < pageCount; page++) {
        // Add new page if not the first page
        if (page > 0) {
          pdf.addPage();
        }

        const position = -page * pageHeight; // Calculate vertical position for this page
        pdf.addImage(
          canvas.toDataURL("image/jpeg", 0.5),
          "JPEG",
          0,
          position,
          imgWidth,
          imgHeight,
          undefined,
          "FAST"
        );
      }

      pdf.save(fileName);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      onClick={handleDownloadPDF}
      disabled={isExporting}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        isExporting
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      } text-white`}
    >
      <Download size={20} />
      {isExporting ? "Generating PDF..." : "Download PDF"}
    </button>
  );
};

export default DownloadPDFButton;
