import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Timer, BarChart2, Mail, Settings, Download } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Portfolio = () => {
  const [isExporting, setIsExporting] = useState(false);

  const project = {
    title: "Passport to Maths Need Analysis Test Automation",
    period: "August 2024 - October 2024",
    organization: "Monash College",
    role: "Moodle Plugin Developer (Intern)",
    description: `Developed and implemented an automated system for the Passport to Maths program that analyzes student test performance and generates personalized module recommendations. The system features a sophisticated module allocation algorithm and automated email generation, significantly reducing administrative workload while maintaining high accuracy in recommendations.`,
    features: [
      {
        title: "Intelligent Module Allocation",
        description:
          "Automated analysis of student performance data using a BFS-based algorithm to recommend appropriate learning modules",
        icon: <Settings />,
      },
      {
        title: "Personalized Email Generation",
        description:
          "Automated creation and formatting of personalized emails containing module recommendations and next steps for each student",
        icon: <Mail />,
      },
      {
        title: "Performance Optimization",
        description:
          "Significantly improved processing speed through optimized data structures and algorithms",
        icon: <Timer />,
      },
      {
        title: "Data Integration",
        description:
          "Seamless integration with Moodle LMS and existing spreadsheet-based workflows",
        icon: <BarChart2 />,
      },
    ],
    metrics: [
      {
        label: "Module Processing Speed",
        oldValue: "57.1s",
        newValue: "19s",
        improvement: "66.7%",
      },
      {
        label: "Email Generation",
        oldValue: "15 min",
        newValue: "3 min",
        improvement: "80%",
      },
      {
        label: "Recommendation Accuracy",
        value: "99.9%",
        type: "achievement",
      },
    ],
    techStack: [
      "Google Apps Script",
      "JavaScript",
      "Moodle Integration",
      "CSV Processing",
      "Drive API",
      "BFS Algorithm",
    ],
  };

  const handleDownloadPDF = async () => {
    setIsExporting(true);
    const content = document.getElementById("portfolio-content");

    try {
      const canvas = await html2canvas(content, {
        scale: 4, // Increased scale for better quality
        useCORS: true,
        logging: false,
        imageTimeout: 0, // Prevent timeout for large images
        backgroundColor: "#ffffff",
        removeContainer: true,
        windowWidth: content.scrollWidth,
        windowHeight: content.scrollHeight,
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const pdf = new jsPDF({
        unit: "mm",
        format: "a4",
        compress: false, // Disable compression for better quality
      });

      const imgData = canvas.toDataURL("image/jpeg", 1.0); // Using maximum quality JPEG

      pdf.addImage(
        imgData,
        "JPEG",
        0,
        0,
        imgWidth,
        imgHeight,
        undefined,
        "FAST"
      );

      // If content is longer than one page
      if (imgHeight > 297) {
        let remainingHeight = imgHeight;
        let position = -297;

        while (remainingHeight > 0) {
          pdf.addPage();
          pdf.addImage(
            imgData,
            "JPEG",
            0,
            position,
            imgWidth,
            imgHeight,
            undefined,
            "FAST"
          );
          remainingHeight -= 297;
          position -= 297;
        }
      }

      pdf.save("portfolio.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Download Button with loading state */}
      <div className="flex justify-end mb-4">
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
      </div>

      {/* Main content with ID for PDF generation */}
      <div id="portfolio-content">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Yasindu (Yasey) Deeyagaha</h1>
          <p className="text-xl text-gray-600">
            Full-Stack Developer & Process Automation Specialist
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <img
            src="./images/profile.jpg"
            alt="Yasindu Deeyagaha"
            className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-blue-500"
          />
        </div>

        <div className="text-justify mx-auto text-left mb-8">
          <p className="text-lg text-gray-700 mb-6">
            As a full-stack developer with a Master&apos;s in Cyber Security, I blend
            technical expertise with a security-first mindset. My passion lies
            in creating robust, user-friendly applications that make a real
            difference. With experience spanning from enterprise-level systems
            to innovative startups, I bring both technical depth and practical
            problem-solving to every project.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/yasey/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/FSocietyLK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub Projects
            </a>
            <a
              href="https://fsocietylk.wordpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke-width="0"></g>
                <g stroke-linecap="round" stroke-linejoin="round"></g>
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M6.75 9.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM6 12.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"></path>{" "}
                    <path
                      fill-rule="evenodd"
                      d="M7.25 2.5C6.56 2.5 6 3.06 6 3.75v3.5c0 .69.56 1.25 1.25 1.25h4.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-4.5zM7.5 7V4h4v3h-4z"
                      clip-rule="evenodd"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      d="M2.75 16h10.5a2.25 2.25 0 002.25-2.25V2.25A2.25 2.25 0 0013.25 0h-7.5A2.25 2.25 0 003.5 2.25V3.5h-.75A2.25 2.25 0 00.5 5.75v8A2.25 2.25 0 002.75 16zM14 2.25v11.5a.75.75 0 01-.75.75H4.872c.083-.235.128-.487.128-.75V2.25a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75zM2.75 14.5a.75.75 0 00.75-.75V5h-.75a.75.75 0 00-.75.75v8c0 .414.336.75.75.75z"
                      clip-rule="evenodd"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              Tech Blog
            </a>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">About This Portfolio</h2>
            <p className="text-gray-700">
              This portfolio website itself is built using React and deployed on
              GitHub Pages, leveraging modern web technologies for optimal
              performance. The tech stack demonstrates my commitment to using
              cutting-edge tools while maintaining clean, efficient code
              practices. The tech stack includes:
            </p>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>• React.js for dynamic UI components</li>
              <li>• Tailwind CSS for responsive styling</li>
              <li>• Next.js for production build</li>
              <li>• GitHub Actions for automated deployment</li>
            </ul>
            <p className="mt-4 text-gray-700">
              For a deeper dive into my projects and technical writings, visit
              my GitHub repository and blog where I share detailed
              documentation, code samples, and insights into my development
              journey.
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold">
                  {project.title}
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  {project.organization} | {project.period}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Project Overview */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="text-blue-500 mt-1">{feature.icon}</div>
                      <div>
                        <h4 className="font-semibold">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Screenshots - Changed to vertical layout */}
              <div>
                <h3 className="text-xl font-semibold mb-4">System Interface</h3>
                <div className="space-y-8">
                  {" "}
                  {/* Changed to vertical stack with increased spacing */}
                  <div className="space-y-2">
                    <img
                      src="./images/module-recommendation.png"
                      alt="Module Recommendation Interface"
                      className="rounded-lg shadow-md w-full object-contain"
                    />
                    <p className="text-sm text-gray-600 text-center">
                      Module Recommendation Dashboard with automated data
                      processing
                    </p>
                  </div>
                  <div className="space-y-2">
                    <img
                      src="./images/email-template.png"
                      alt="Automated Email Template"
                      className="rounded-lg shadow-md w-full object-contain"
                    />
                    <p className="text-sm text-gray-600 text-center">
                      Personalized email generation with module recommendations
                    </p>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Performance Improvements
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">
                        {metric.label}
                      </h4>
                      {metric.type === "achievement" ? (
                        <div className="text-green-600 font-bold text-2xl">
                          {metric.value}
                        </div>
                      ) : (
                        <div>
                          <p className="text-gray-600">
                            Before: {metric.oldValue}
                          </p>
                          <p className="text-gray-600">
                            After: {metric.newValue}
                          </p>
                          <p className="text-green-600 font-bold mt-2">
                            ↓ {metric.improvement}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Stack */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;
