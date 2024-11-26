import React, { useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Timer, BarChart2, Mail, Settings, Download } from "lucide-react";

const Portfolio = () => {
  const contentRef = useRef();
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
      "Gmail API",
      "BFS Algorithm",
    ],
  };

  const handleDownloadPDF = () => {
    const element = contentRef.current;
    const opt = {
      filename: "yasindu-portfolio.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    // Use html2pdf
    window.html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 bg-white text-black">
      {/* Download Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download size={20} />
          Download PDF
        </button>
      </div>

      <div ref={contentRef}>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Yasindu (Yasey) Deeyagaha</h1>
          <p className="text-xl text-gray-600">
            Full-Stack Developer & Process Automation Specialist
          </p>
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

              {/* System Screenshots */}
              <div>
                <h3 className="text-xl font-semibold mb-4">System Interface</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <img
                      src="/images/module-recommendation.png"
                      alt="Module Recommendation Interface"
                      className="rounded-lg shadow-md w-full"
                    />
                    <p className="text-sm text-gray-600 text-center">
                      Module Recommendation Dashboard with automated data
                      processing
                    </p>
                  </div>
                  <div className="space-y-2">
                    <img
                      src="/images/email-template.png"
                      alt="Automated Email Template"
                      className="rounded-lg shadow-md w-full"
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
