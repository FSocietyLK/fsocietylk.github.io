import React, { useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import VideoDemo from "@/components/ui/video-demo";
import DownloadPDFButton from "@/components/ui/download-pdf-button";
import {
  Focus,
  Timer,
  BarChart2,
  ChartLine,
  ShoppingCart,
  Mail,
  Activity,
  Settings,
  Search,
  Calculator,
  ClipboardCheck,
  Shield,
  Lock,
  Bot,
  Table,
  Layout,
  Server,
  GitBranch,
  CircleCheckBig,
} from "lucide-react";

const Portfolio = () => {
  // Handle URL hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  // Scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Generate unique ID for each project
  const getProjectId = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "Java/JavaScript",
        "React.js",
        "Next.js",
        "HTML5",
        "CSS3",
        "jQuery",
        "Bootstrap",
        "Tailwind",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "PHP",
        "ASP.NET",
        "RESTful APIs",
        "Dialogflow",
        "MongoDB",
        "SQL/MySQL",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "Github/Bitbucket",
        "Google Apps Script",
        "Jenkins",
        "Docker",
        "JUnit/Jest",
        "Postman",
        "Trello/Jira",
      ],
    },
  ];

  const projects = [
    {
      title: "Automotive Intelligence - IoT Smart Workshop System",
      period: "2021 March - 2021 June",
      organization: "Deakin University",
      role: "Lead Full Stack Developer",
      description: `Developed an innovative IoT-based system to modernize automotive workshop operations by implementing RFID technology for asset tracking and external API integrations. The system streamlines workshop efficiency and resource management through automated tool tracking, job card generation, inventory management, and vehicle service history monitoring. The project demonstrates implementation of secure authentication, RESTful API design, docker containerization and modern software development best practices including MVC architecture and agile methodologies.`,
      features: [
        {
          title: "Secure Authorisation & Authentication",
          description:
            "Implemented Google/Facebook OAuth, SSL encryption with self-signed certificate, and user protected routes",
          icon: <Lock />,
        },
        {
          title: "Asset Management",
          description:
            "RFID-based tool tracking system with real-time location monitoring and usage analytics",
          icon: <Settings />,
        },
        {
          title: "Vehicle Management",
          description:
            "Integration with VicRoads API for vehicle registration verification and digital job card generation",
          icon: <ClipboardCheck />,
        },
        {
          title: "Containerized Deployment",
          description:
            "Containerized application using Docker for consistent deployment and scalability",
          icon: <Server />,
        },
        {
          title: "System Architecture",
          description:
            "Implemented Model-View-Controller architecture for scalability and maintainability",
          icon: <Layout />,
        },
      ],
      metrics: [
        {
          label: "Tool Tracking Time",
          oldValue: "Manual Process",
          newValue: "Automated with RFID",
          improvement: "Significant",
        },
        {
          label: "Vehicle Data Retrieval",
          oldValue: "2 minutes",
          newValue: "Under 5 seconds",
          improvement: "95.8%",
        },
        {
          label: "Workshop Efficiency",
          value: "40% increase in throughput",
          type: "achievement",
        },
      ],
      videoDemo: {
        url: "./videos/automotive-demo.mp4",
        posterUrl: "./images/automotive-demo-poster.png",
        description:
          "System demonstration of key features including user authentication, vehicle data verification, inventory management, and RFID tool tracking across different user roles",
      },
      techStack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "EJS",
        "Docker",
        "Material CSS",
        "SSL/TLS",
        "Socket.IO",
        "RFID Integration",
        "Google/Facebook OAuth",
        "VicRoads API",
        "MVC Architecture",
      ],
      externalLinks: [
        {
          type: "github",
          title: "View Source Code",
          url: "https://github.com/FSocietyLK/Automotive-Intelligence",
          note: "Complete codebase including IoT integration, secure authentication, and real-time functionality",
        },
      ],
    },
    {
      title: "InnovArts - Art Gallery Ecommerce Platform",
      period: "2022 February - 2022 June",
      organization: "Freelance Project",
      role: "Full Stack Developer",
      description: `Designed and developed a fully responsive e-commerce platform for an art gallery startup, featuring an intuitive shopping experience across all devices. The project showcases modern web development practices with a focus on user experience and interactive features. The live website demonstrates smooth navigation, dynamic cart functionality, and responsive design implementation.`,
      features: [
        {
          title: "Responsive Design",
          description:
            "Fully responsive layout with optimized user experience across mobile, tablet, and desktop devices",
          icon: <Layout />,
        },
        {
          title: "Interactive Shopping Cart",
          description:
            "Real-time cart management with session persistence and smooth animations",
          icon: <ShoppingCart />,
        },
        {
          title: "Live Production Deployment",
          description:
            "Deployed frontend and backend to web hosting platform with SSL security and database integration",
          icon: <Server />,
        },
      ],
      metrics: [
        {
          label: "User Experience",
          value: "Seamless across devices",
          type: "achievement",
        },
        {
          label: "Browser Compatibility",
          value: "98% cross-browser support",
          type: "achievement",
        },
        {
          label: "SSL Certificate",
          value: "HTTPS encrypted data transmission",
          type: "achievement",
        },
      ],
      videoDemo: {
        url: "./videos/innovarts-demo.mp4",
        posterUrl: "./images/innovarts-demo-poster.png",
        description:
          "Demonstration of the complete user journey including responsive design, shopping cart functionality, and checkout process across different devices.",
      },
      liveDemo: {
        url: "https://innovarts.infy.uk",
        note: "View the live implementation to experience the responsive design and interactive features firsthand.",
      },
      techStack: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JavaScript",
        "jQuery/AJAX",
        "PHP",
        "MySQL",
        "Responsive Design",
        "Session Management",
        "Web Hosting",
      ],
      externalLinks: [
        {
          type: "github",
          title: "View Source Code",
          url: "https://github.com/FSocietyLK/Innovarts",
          note: "Complete source code including frontend responsive design and cart functionality",
        },
      ],
    },
    {
      title: "VPMS Features Demonstration",
      period: "November 2022 - January 2023",
      organization: "VetCheck",
      role: "Frontend Developer",
      videoDemo: {
        url: "./videos/vpms-demo.mp4",
        posterUrl: "./images/vpms-demo-poster.png",
        description:
          "Interactive demonstration of VPMS features including appointment booking and calculator functionality across desktop and mobile devices",
      },
    },
    {
      title: "Library Management System",
      period: "2016 August - 2016 November",
      organization: "SLIIT",
      role: "Software Developer",
      description: `Developed a standalone Library Management System to streamline library operations through an intuitive interface. The system features comprehensive book management, user authentication, and reporting capabilities, packaged as a Windows executable for easy deployment. The application demonstrates robust database integration and efficient report generation using JasperReports.`,
      features: [
        {
          title: "Standalone Application",
          description:
            "Windows executable package with seamless installation process and database setup",
          icon: <Settings />,
        },
        {
          title: "Book Management",
          description:
            "Comprehensive system for adding, editing, and managing book records with intuitive controls",
          icon: <Layout />,
        },
        {
          title: "Advanced Reporting",
          description:
            "Dynamic report generation using iReport for operations analysis and tracking",
          icon: <BarChart2 />,
        },
      ],
      metrics: [
        {
          label: "Processing Speed",
          oldValue: "Manual tracking",
          newValue: "Real-time updates",
          improvement: "75%",
        },
        {
          label: "Record Accuracy",
          value: "99.9% data integrity",
          type: "achievement",
        },
      ],
      videoDemo: {
        url: "./videos/library-demo.mp4",
        posterUrl: "./images/library-demo-poster.png",
        description:
          "Walkthrough of the library management system showcasing book management, borrowing process, and reporting functionalities",
      },
      techStack: [
        "Java",
        "Maven",
        "Swing UI",
        "MySQL",
        "JDBC",
        "JasperReports",
        "iReport",
        "NetBeans IDE",
        "Windows Executable",
      ],
      externalLinks: [
        {
          type: "github",
          title: "View Source Code",
          url: "https://github.com/FSocietyLK/Library-Management-System",
          note: "Complete source code including database schema and report templates",
        },
      ],
    },
    {
      title: "NIST Cybersecurity Framework Web Toolkit",
      period: "2021 July - 2021 October",
      organization: "Deakin University - CSRI",
      role: "Lead Full Stack Developer",
      description: `Led the development of a comprehensive web-based assessment toolkit using the MERN stack, implementing the NIST Cybersecurity Framework for the Centre for Cyber Security Research and Innovation (CSRI). The system features robust user authentication with OAuth integration, user management, real-time questionnaire assessments, and automated maturity assessment engine that provides detailed recommendations for organizations (SMEs) to evaluate their cybersecurity posture through an advanced questionnaire system across five core phases: Identify, Protect, Detect, Respond, and Recover. The project was developed following agile methodologies and modern software architecture practices.`,
      features: [
        {
          title: "Automated Analysis",
          description:
            "Developed a dynamic questionnaire and an intelligent scoring system with detailed, customized, and actionable recommendations for cybersecurity improvements",
          icon: <ChartLine />,
        },
        {
          title: "Secure Authentication",
          description:
            "Integrated Google/Facebook OAuth2.0, and 2FA (Two-factor authentication) via email and SMS-based verification for enhanced account security",
          icon: <Lock />,
        },
        {
          title: "AI-Powered Assistance",
          description:
            "Implemented a Dialogflow chatbot for automated support and FAQ handling, utilizing React-Redux for state consistency",
          icon: <Bot />,
        },
        {
          title: "Advanced Security",
          description:
            "SSL/TLS integration, containerized deployment, and protected route implementation",
          icon: <Shield />,
        },
      ],
      metrics: [
        {
          label: "Assessment Time",
          oldValue: "Hours of manual review",
          newValue: "15-20 minutes",
          improvement: "85%",
        },
        {
          label: "Development Timeline",
          value: "Completed in 3 successful sprints",
          type: "achievement",
        },
        {
          label: "Authentication Security",
          value: "2FA + OAuth Integration",
          type: "achievement",
        },
      ],
      images: [
        {
          src: "./images/nist-initial-sprint.png",
          alt: "Initial Sprint Developments",
          caption:
            "Account creation, login, basic dashboard features and maturity assessment functionality from the first sprint",
        },
        {
          src: "./images/nist-final-sprint.png",
          alt: "Final Sprint Enhancements",
          caption:
            "Comprehensive system features including 2FA verification, assessment dashboard, user management and chatbot from the final sprint",
        },
      ],
      techStack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "React.js",
        "SCSS/CSS",
        "Docker",
        "Webpack/Babel",
        "OAuth2.0",
        "Socket.IO",
        "SSL/TLS",
        "Git/Bitbucket",
        "MVC Architecture",
        "Agile/Scrum",
      ],
    },
    {
      title: "DevOps Pipeline with Jenkins",
      period: "2023 June",
      organization: "Deakin University",
      role: "DevOps Engineer",
      description: `Developed and implemented a complete CI/CD pipeline using Jenkins for a simple full-stack Task Manager app. The project demonstrates modern DevOps practices including automated testing, containerized deployment, and continuous integration through a Jenkins pipeline integrated with GitHub webhooks. The pipeline automates the build, test, and deployment processes while ensuring code quality and reliable delivery.`,
      features: [
        {
          title: "Automated Pipeline",
          description:
            "Multi-stage Jenkins pipeline with automated build, test, and deployment processes",
          icon: <Settings />,
        },
        {
          title: "Containerized Deployment",
          description:
            "Docker containerization with separate frontend and backend services using docker-compose",
          icon: <Server />,
        },
        {
          title: "Automated Testing",
          description:
            "Integrated Jest testing framework for both frontend and backend with automated test execution",
          icon: <CircleCheckBig />,
        },
        {
          title: "GitHub Integration",
          description:
            "Configured webhooks and SSH authentication for automated pipeline triggers on code push",
          icon: <GitBranch />,
        },
      ],
      metrics: [
        {
          label: "Deployment Time",
          oldValue: "20+ minutes",
          newValue: "5-10 minutes",
          improvement: "65%",
        },
        {
          label: "Build Time",
          oldValue: "Manual Process",
          newValue: "Automated in Pipeline",
          improvement: "Significant",
        },
        {
          label: "Build Process",
          value: "Fully automated CI/CD",
          type: "achievement",
        },
      ],
      videoDemo: {
        url: "./videos/devops-demo.mp4",
        posterUrl: "./images/devops-demo-poster.png",
        description:
          "Demonstration of the complete CI/CD pipeline execution including Jenkins build process, automated testing, Docker deployment, and email notifications.",
      },
      techStack: [
        "Jenkins",
        "Docker",
        "Node.js",
        "React",
        "Jest",
        "Webpack",
        "Babel",
        "SSH",
        "GitHub Webhooks",
        "CI/CD Pipeline",
      ],
      externalLinks: [
        {
          type: "github",
          title: "View Source Code",
          url: "https://github.com/FSocietyLK/Task-Manager",
          note: "Source code for both frontend React application and Node.js backend with Jenkins pipeline configuration",
        },
      ],
    },
    {
      title: "Advanced Intrusion Detection System with ML-based Correlation",
      period: "2018 March - 2018 October",
      organization: "SLIIT - Research Project",
      role: "Lead Developer & Researcher",
      description: `Developed an innovative intrusion detection system integrating Host-based and Network-based IDS with machine learning and rule-based alert correlation techniques to address the limitations of traditional IDS. Built a custom correlation engine using Python and Prelude SIEM to analyze and correlate both OSSEC HIDS and Snort NIDS alerts. The system significantly improved threat detection accuracy while reducing false positives and providing an actionable alert, leading to a published research paper in the International Journal of Advanced Computer Science and Applications.`,
      features: [
        {
          title: "Unified Detection",
          description:
            "Integrated HIDS (OSSEC) and NIDS (Snort) capabilities with centralized management and standardized IDMEF alerts",
          icon: <Shield />,
        },
        {
          title: "ML Correlation",
          description:
            "Advanced correlation engine using rule-based techniques and KNN classifier for alert verification",
          icon: <Search />,
        },
        {
          title: "Automated Management",
          description:
            "Real-time monitoring and alert processing with automated prioritization and notification system",
          icon: <Activity />,
        },
        {
          title: "Performance Analysis",
          description:
            "Comprehensive testing showing significant reduction in false positives while maintaining detection accuracy",
          icon: <BarChart2 />,
        },
      ],
      metrics: [
        {
          label: "False Positive Rate",
          oldValue: "Traditional IDS baseline",
          newValue: "Significant reduction",
          improvement: "65%",
        },
        {
          label: "Detection Accuracy",
          value: "94% with ML correlation",
          type: "achievement",
        },
        {
          label: "Research Impact",
          value: "Published in IJACSA",
          type: "achievement",
        },
      ],
      images: [
        {
          src: "./images/ids-system-interfaces.png",
          alt: "IDS System Interfaces Collection",
          caption:
            "Comprehensive view of the IDS system showing alert correlation process: SSH brute force detection through multiple login attempts, correlation analysis, detailed alert views, sensor monitoring interfaces, and system management dashboards",
        },
        {
          src: "./images/ids-ml-analysis.png",
          alt: "Machine Learning Analysis Interfaces",
          caption:
            "Machine learning analysis demonstrating data preprocessing, feature engineering, correlation analysis, and model evaluation: includes correlation rule formats, dataset analysis, feature importance visualizations, alert mapping tables, and prediction results",
        },
      ],
      techStack: [
        "Python",
        "TensorFlow",
        "OSSEC HIDS",
        "Snort NIDS",
        "Prelude SIEM",
        "XML",
        "IDMEF",
        "MySQL",
        "Machine Learning",
        "KNN Classifier",
        "Linux",
      ],
      externalLinks: [
        {
          type: "publication",
          title: "See Publication",
          url: "https://thesai.org/Downloads/Volume9No9/Paper_47-Intrusion_Detection_System.pdf",
          note: "Research paper published in International Journal of Advanced Computer Science and Applications (IJACSA)",
        },
      ],
    },
    {
      title: "File Encryptor - Secure File Protection System",
      period: "2016 April - 2016 June",
      organization: "SLIIT",
      role: "Solo Developer",
      description: `Developed a standalone Windows application for secure file encryption and decryption using AES algorithm. The application features a user-friendly interface for batch file processing, custom destination directories, and robust error handling. Implemented with strong security measures including self-signed certificate for secure installation and 256-bit AES encryption for file protection.`,
      features: [
        {
          title: "Advanced Data Protection",
          description:
            "256-bit AES encryption implementation with secure password-based key generation",
          icon: <Lock />,
        },
        {
          title: "Batch Processing",
          description:
            "Multi-file encryption/decryption support with custom output directory selection",
          icon: <Settings />,
        },
        {
          title: "Secure Deployment",
          description:
            "Packaged as a Windows executable, signed with a self-signed certificate for secure and seamless installation and execution",
          icon: <Shield />,
        },
      ],
      metrics: [
        {
          label: "Processing Speed",
          value: "4KB block optimization",
          type: "achievement",
        },
        {
          label: "Data Protection",
          value: "100% file integrity",
          type: "achievement",
        },
      ],
      images: [
        {
          src: "./images/encryptor-workflow.png",
          alt: "File Encryptor Workflow Steps",
          caption:
            "Complete workflow demonstration: Installation, file selection, encryption process, and successful decryption verification",
        },
      ],
      techStack: [
        "C#",
        ".NET Framework",
        "Windows Forms",
        "AES Cryptography",
        "Visual Studio",
        "Digital Certificate",
        "Windows Executable",
      ],
      externalLinks: [
        {
          type: "github",
          title: "View Source Code",
          url: "https://github.com/FSocietyLK/File-Encryptor",
          note: "Source code featuring AES encryption implementation and Windows Forms interface",
        },
        {
          type: "blog",
          title: "Read Blog Post",
          url: "https://fsocietylk.wordpress.com/2017/03/21/ransomware/",
          note: "Detailed technical walkthrough of the encryption process and implementation details",
        },
      ],
    },
    {
      title: "VPMS Appointment Booking Widget",
      period: "December 2022",
      organization: "VetCheck",
      role: "Frontend Developer",
      description:
        "Designed and implemented a user-friendly Appointment Booking Widget for the VetCheck Veterinary Practice Management System (VPMS). This widget serves as a floating UI component that allows clients' customers to schedule appointments conveniently, featuring responsive design and accessibility considerations.",
      images: [
        {
          src: "./images/booking-widget.png",
          alt: "VPMS Appointment Booking Widget Interface",
          caption:
            "Progressive booking interface showing date selection, client information, and appointment details",
        },
      ],
      features: [
        {
          title: "Responsive Design",
          description:
            "Implemented fully responsive and cross-platform compatible interface",
          icon: <Layout />,
        },
        {
          title: "Client Validation",
          description:
            "Reduced form submission errors by 95% through comprehensive client-side validation",
          icon: <CircleCheckBig />,
        },
        {
          title: "Accessibility",
          description:
            "Implemented keyboard tabbing focus and proper ARIA labels for better accessibility",
          icon: <Focus />,
        },
      ],
      metrics: [
        {
          label: "Client Satisfaction",
          value: "Excellent Feedback",
          type: "achievement",
        },
        {
          label: "Appointment Booking Time",
          oldValue: "5+ minutes",
          newValue: "Under 2 minutes",
          improvement: "60%",
        },
        {
          label: "User Experience",
          value: "95% usability rating",
          type: "achievement",
        },
      ],
      techStack: [
        "JavaScript",
        "jQuery",
        "HTML",
        "CSS",
        "UI/UX Design",
        "Chrome Dev Tools",
      ],
    },
    {
      title: "VPMS Calculator Widget & Search",
      period: "January 2023",
      organization: "VetCheck",
      role: "Frontend Developer",
      description:
        "Rebuilt the Calculator Widget addressing computational issues and implemented an intuitive Search Functionality. Fixed critical floating-point arithmetic issues and enhanced UI responsiveness.Resolved and Fixed critical floating-point arithmetic inaccuracies, percentage calculation bugs, and enhanced UI responsiveness while adding new features like keyboard bindings.",
      images: [
        {
          src: "./images/calculator-search.png",
          alt: "VPMS Calculator and Search Interface",
          caption:
            "Integrated calculator widget and help center search functionality showing dynamic article filtering and improved arithmetic precision",
        },
      ],
      features: [
        {
          title: "Advanced Calculations",
          description:
            "Implemented precise floating-point arithmetic and complex calculations",
          icon: <Calculator />,
        },
        {
          title: "Error Prevention",
          description:
            "Reduced calculation errors by 99.9% through comprehensive input validation",
          icon: <CircleCheckBig />,
        },
        {
          title: "Enhanced UI",
          description:
            "Developed responsive interface with keyboard shortcuts and intuitive controls",
          icon: <Layout />,
        },
        {
          title: "Search Functionality",
          description: "Developed dynamic search with keyword-based filtering",
          icon: <Search />,
        },
      ],
      metrics: [
        {
          label: "Calculation Accuracy",
          value: "100%",
          type: "achievement",
        },
        {
          label: "Search Response Time",
          oldValue: "20-30 seconds manually",
          newValue: "Under 100ms",
          improvement: "95.5%",
        },
      ],
      techStack: [
        "Pure JavaScript",
        "HTML",
        "CSS",
        "Decimal.js",
        "UI/UX Design",
      ],
    },
    {
      title: "SRR Monitor UI & Dialogflow Bot",
      period: "February 2023",
      organization: "VetCheck",
      role: "Full Stack Developer",
      description:
        "Designed the SRR Monitor Sheet UI for streamlined data entry and researched AI-powered chatbot integration using Dialogflow. Developed a proof-of-concept for an intelligent FAQ filtering system by integrating Google's Dialogflow API for natural language processing and intent recognition, with implementation through the Facebook Developer App for user interaction.",
      images: [
        {
          src: "./images/srr-monitor.png",
          alt: "SRR Monitor Sheet and FAQ Interface",
          caption:
            "Dynamic SRR monitoring interface with integrated FAQ search functionality",
        },
        {
          src: "./images/dialogflow-bot.png",
          alt: "Dialogflow Messenger Bot Interface",
          caption:
            "AI-powered chatbot prototype for automated customer support",
        },
      ],
      features: [
        {
          title: "Dynamic UI Generation",
          description:
            "Implemented dynamic table generation for efficient data entry",
          icon: <Table />,
        },
        {
          title: "AI Integration",
          description:
            "Researched and prototyped AI-powered chatbot using Dialogflow",
          icon: <Bot />,
        },
      ],
      metrics: [
        {
          label: "Workflow Efficiency",
          oldValue: "Manual process",
          newValue: "Automated",
          improvement: "Significant",
        },
        {
          label: "User Productivity",
          value: "60% increase",
          type: "achievement",
        },
      ],
      techStack: [
        "JavaScript",
        "Google Dialogflow API",
        "Facebook Developer App",
        "Messenger Bot API",
        "UI/UX Design",
      ],
    },
    {
      title: "Passport to Maths Need Analysis Test Automation",
      period: "August 2024 - October 2024",
      organization: "Monash College",
      role: "Moodle Plugin Developer",
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
          label: "Student Retention",
          value: "92% completion rate",
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
      images: [
        {
          src: "./images/module-recommendation.png",
          alt: "Module Recommendation Interface",
          caption:
            "Module Recommendation Dashboard with automated data processing",
        },
        {
          src: "./images/email-template.png",
          alt: "Automated Email Template",
          caption: "Personalized email generation with module recommendations",
        },
      ],
    },
    {
      title: "P2M Reporting System Automation",
      period: "October 2024 - November 2024",
      organization: "Monash College",
      role: "Moodle Plugin Developer",
      description:
        "Developed a scalable automation solution for a comprehensive learning analytics system that automated the process of preparing and generating three key reports for student journey analysis. Streamlined data extraction, cleaning, and integration processes from CSV files into Google Sheets, featuring dynamic reporting for NAT completion, module allocation, and engagement analysis.",
      images: [
        {
          src: "./images/p2m-report.png",
          alt: "P2M Progress Report Interface",
          caption:
            "Master dataset showing module allocation across different math units",
        },
        {
          src: "./images/p2m-flow.png",
          alt: "P2M System Process Flow",
          caption:
            "Automated reporting system workflow showing data preparation, NAT processing, and report generation stages",
        },
      ],
      features: [
        {
          title: "Automated Report Generation",
          description:
            "Implemented dynamic report generation system handling multiple data sources and complex calculations",
          icon: <BarChart2 />,
        },
        {
          title: "Data Integration",
          description:
            "Built robust data validation and error handling mechanisms for CSV processing",
          icon: <Settings />,
        },
        {
          title: "Formula Optimization",
          description:
            "Utilized advanced formula expressions for efficient data processing and calculations",
          icon: <Calculator />,
        },
        {
          title: "Performance Enhancement",
          description:
            "Optimized system performance through efficient data structures and parallel processing",
          icon: <Timer />,
        },
      ],
      metrics: [
        {
          label: "Manual Workload Reduction",
          oldValue: "100%",
          newValue: "20%",
          improvement: "80%",
        },
        {
          label: "Report Generation Time",
          oldValue: "4 hours",
          newValue: "15 minutes",
          improvement: "93.75%",
        },
        {
          label: "Data Accuracy",
          value: "99.9%",
          type: "achievement",
        },
      ],
      techStack: [
        "JavaScript/Apps Script",
        "Google Sheets",
        "Drive API",
        "Array Formulas",
        "CSV Processing",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Download Button with loading state */}
      <div className="flex justify-end mb-4">
        <DownloadPDFButton
          contentId="portfolio-content"
          fileName="portfolio.pdf"
        />
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
          <div className="print:px-8">
            <p className="text-lg text-gray-700 mb-6">
              As a full-stack developer with a Master&apos;s in Cyber Security,
              I blend technical expertise with a security-first mindset. My
              passion lies in creating robust, user-friendly applications that
              make a real difference. With experience spanning from
              enterprise-level systems to innovative startups, I bring both
              technical depth and practical problem-solving to every project.
            </p>
          </div>

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
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <g>
                    <path d="M6.75 9.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM6 12.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z" />
                    <path
                      fillRule="evenodd"
                      d="M7.25 2.5C6.56 2.5 6 3.06 6 3.75v3.5c0 .69.56 1.25 1.25 1.25h4.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-4.5zM7.5 7V4h4v3h-4z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M2.75 16h10.5a2.25 2.25 0 002.25-2.25V2.25A2.25 2.25 0 0013.25 0h-7.5A2.25 2.25 0 003.5 2.25V3.5h-.75A2.25 2.25 0 00.5 5.75v8A2.25 2.25 0 002.75 16zM14 2.25v11.5a.75.75 0 01-.75.75H4.872c.083-.235.128-.487.128-.75V2.25a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75zM2.75 14.5a.75.75 0 00.75-.75V5h-.75a.75.75 0 00-.75.75v8c0 .414.336.75.75.75z"
                      clipRule="evenodd"
                    />
                  </g>
                </g>
              </svg>
              Tech Blog
            </a>
          </div>

          {/* Skills Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-600 flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>{" "}
                React.js for dynamic UI components
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>{" "}
                Tailwind CSS for responsive styling
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div> Next.js
                for production build
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div> GitHub
                Actions for automated deployment
              </li>
            </ul>
            <p className="mt-4 text-gray-700">
              For a deeper dive into my projects and technical writings, visit
              my GitHub repository and blog where I share detailed
              documentation, code samples, and insights into my development
              journey.
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold px-4 -mb-2">Featured Projects</h2>
          {projects.map((project, index) => (
            <Card key={index} className="mb-8" id={getProjectId(project.title)}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold">
                      {project.title}
                    </CardTitle>
                    <p className="text-gray-600 mt-2">
                      {project.organization} | {project.period}
                    </p>
                    {project.role && (
                      <p className="text-gray-600 mt-1">{project.role}</p>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Project Overview */}
                  {project.description && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        Project Overview
                      </h3>
                      <p className="text-gray-700">{project.description}</p>
                    </div>
                  )}

                  {/* Live Demo */}
                  {project.liveDemo && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Live Demo</h3>
                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                          <div className="flex-grow">
                            <p className="text-gray-700 mb-2">
                              <span className="font-semibold">
                                Experience the live website:
                              </span>{" "}
                              Explore the responsive design, interactive
                              features, and secure browsing with SSL encryption.
                            </p>
                            <p className="text-sm text-gray-600">
                              {project.liveDemo.note}
                            </p>
                          </div>
                          <a
                            href={project.liveDemo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                          >
                            View Live Site
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                        <div className="inline-flex items-center gap-2 mt-4 -ml-1 px-2 py-0.5 rounded-full text-xs bg-green-100 text-green-800">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                          <span>Secured with SSL Certificate (HTTPS)</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Video Demo */}
                  {project.videoDemo && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        Project Features Demo
                      </h3>
                      <VideoDemo
                        videoUrl={project.videoDemo.url}
                        posterUrl={project.videoDemo.posterUrl}
                        description={project.videoDemo.description}
                      />
                    </div>
                  )}

                  {/* Key Features */}
                  {project.features && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        Key Features
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="text-blue-500 mt-1">
                              {feature.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold">{feature.title}</h4>
                              <p className="text-gray-600">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* System Screenshots */}
                  {project.images && project.images.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        System Interface
                      </h3>
                      <div className="space-y-8">
                        {project.images.map((image, idx) => (
                          <div key={idx} className="space-y-2">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="rounded-lg shadow-md w-full object-contain"
                            />
                            <p className="text-sm text-gray-600 text-center">
                              {image.caption}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Performance Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
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
                  )}

                  {/* Technical Stack */}
                  {project.techStack && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        Technical Stack
                      </h3>
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
                  )}

                  {/* External Links */}
                  {project.externalLinks && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        Additional Resources
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.externalLinks.map((link, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                          >
                            <div className="flex flex-col space-y-3">
                              <div className="flex items-start justify-between">
                                <h4 className="font-semibold text-lg">
                                  {link.type === "publication"
                                    ? "Research Publication"
                                    : link.type === "github"
                                    ? "Source Code"
                                    : "Technical Blog"}
                                </h4>
                                <span
                                  className={`px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 uppercase`}
                                >
                                  {link.type}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600">
                                {link.note}
                              </p>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 font-medium ${
                                  link.type === "github"
                                    ? "text-gray-800 hover:text-gray-600"
                                    : "text-blue-600 hover:text-blue-800"
                                }`}
                              >
                                {link.type === "github" ? (
                                  <>
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
                                    {link.title}
                                  </>
                                ) : (
                                  <>
                                    {link.title}
                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                      />
                                    </svg>
                                  </>
                                )}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className="border-t bg-gray-100 mt-16">
        <div className="py-8 text-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Yasindu Deeyagaha. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
