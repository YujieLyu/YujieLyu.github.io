import type { ProfileData } from '../types'

export const profileData: ProfileData = {
  name: "Yujie (Jessie) LYU",
  nickname: "Jessie",
  subtitle: "Hi, my name is",
  tagline: "Building Scalable Solutions & AI-Powered Systems on Azure.",
  heroDescription:
    "Software Engineer with 6 years of experience designing and delivering scalable enterprise applications, cloud-native solutions, and AI-powered business systems. Passionate about translating complex business requirements into practical technology solutions with .NET, microservices, and Generative AI.",
  avatarUrl: "/images/avatar.jpg",
  socialLinks: [
    { platform: "github", url: "https://github.com/YujieLyu", icon: "github" },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/yujie-jessie-lyu/",
      icon: "linkedin",
    },
  ],
  aboutImage: "/images/ieaward.jpg",
  aboutText: [
    "I'm a Software Engineer with 6 years of experience designing and delivering scalable enterprise applications, cloud-native solutions, and AI-powered business systems on Azure.",
    "Experienced in translating complex business requirements into practical technology solutions, with a strong background in .NET, microservices, event-driven architectures, and enterprise integrations. Recently expanded into Generative AI and Azure AI technologies, designing and delivering a RAG-powered enterprise knowledge assistant that leverages LLMs, Azure AI Search, and multi-agent workflows.",
  ],
  techStack: [
    "Azure OpenAI",
    "RAG",
    "Azure AI Search",
    "C#",
    ".NET 8/9/10",
    "Microservices",
    "React",
    "TypeScript",
    "Kafka",
    "Docker",
  ],
  experiences: [
    {
      company: "IE Media",
      companyUrl: "https://www.ie.com.au/",
      role: "Software Engineer",
      period: "2020 - Present",
      tooltip: "Software Engineer at IE Media Pty Ltd",
      description:
        "Software Engineer with expertise in enterprise application development, cloud-native architectures, and AI-powered business solutions. Delivered scalable .NET and Azure platforms across consumer web, mobile, eCommerce, and internal AI knowledge systems, working across the full solution lifecycle from architecture and implementation to optimisation and operational support.",
      bullets: [
        "Selected by leadership to lead the RAG-powered enterprise knowledge assistant using Azure OpenAI, Azure AI Search, and Azure Blob Storage to transform historical RFPs and proposals into searchable organisational knowledge.",
        "Designed multi-agent workflows for RFP analysis, proposal summarisation, outline generation, draft creation, review, and refinement, accelerating proposal development and improving knowledge reuse across teams.",
        "Led the redesign of a controller-heavy BFF layer into a Vertical Slice architecture using Minimal APIs, improving cohesion and reducing inter-service coupling.",
        "Replaced fragmented legacy form handling with a single modular submit service and Kafka-backed asynchronous processing, improving resilience under concurrent load.",
        "Designed and delivered scalable backend solutions for Lexus membership subscription with a State Machine pattern managing 10 distinct membership states.",
        "Delivered Sitecore Search integration across 5,000+ pages including metadata schema design, custom indexing logic, and dynamic filtering.",
        "Led technical evaluation and migration proposal from Xamarin to React-based PWA, with CI/CD integration for Azure DevOps pipelines and Fastlane-based App Store distribution.",
        "Introduced standardised cross-cutting concerns: resilience pipelines, unified exception handling with structured logging, and caching strategy to improve performance and observability.",
      ],
      projectUrl: "https://www.lexus.com.au/owners/apps/lexus-app",
      projectLabel: "View Lexus project",
    },
    {
      company: "Startupbootcamp",
      companyUrl: "",
      role: "Web Developer Intern",
      period: "Mar 2019 – Jun 2019",
      tooltip: "Worked as a Web Developer Intern at Startupbootcamp",
      description:
        "Worked as part of the software development Agile team in creative full-stack development (PHP Laravel, WordPress, Tailwind CSS, Vue.js, RESTful web services) at Startupbootcamp in Melbourne, VIC.",
      bullets: [],
    },
  ],
  education: [
    {
      degree: "Master of Information Technology (with Distinction)",
      institution: "The University of Melbourne",
      institutionUrl: "https://www.unimelb.edu.au/",
      period: "Jul 2017 - Jul 2019",
      details: [
        "WAM: 80/100",
        "Main Subjects: Software Modelling and Design, Database System & Information Modelling, Distributed Systems, Mobile Computing Systems Programming, Software Processes and Management, Social Computing, Algorithms and Complexity.",
      ],
    },
    {
      degree: "Bachelor of Information Systems",
      institution: "Shanghai University",
      institutionUrl: "https://www.shu.edu.cn/",
      period: "Sep 2010 - Jul 2014",
      details: [
        "WAM: 82/100",
        "Main Subjects: Data Structures and Algorithms, Object-Oriented Programming, Database Systems & Management.",
      ],
    },
  ],
  projects: [
    {
      title: "Lexus Brand Site & Encore App",
      image: "/images/lexus-app.jpg",
      tags: [
        "Progressive Web Apps",
        "React",
        ".NET",
        "Microservices",
        "Kafka",
      ],
      description:
        "A digital platform helping achieve Lexus's vision of becoming a leader in making luxury personal — spanning membership, eCommerce, search, and mobile experiences.",
      links: [
        {
          icon: "play",
          url: "https://play.google.com/store/apps/details?id=au.com.lexus.mylexus.app",
          label: "Google Play",
        },
        {
          icon: "apple",
          url: "https://apps.apple.com/au/app/lexus/id1480479318",
          label: "App Store",
        },
        {
          icon: "globe",
          url: "https://account.lexus.com.au/signin",
          label: "Web",
        },
        {
          icon: "external",
          url: "https://www.lexus.com.au/owners/apps/lexus-app",
          label: "Learn More",
        },
      ],
    },
    {
      title: "Focusing",
      image: "/images/focusing.png",
      tags: ["Android", "Java"],
      description:
        "An Android application for self-control of smartphone application usage, built as a graduation computing project.",
      links: [
        {
          icon: "github",
          url: "https://github.com/YujieLyu/Focusing",
          label: "GitHub",
        },
        {
          icon: "external",
          url: "https://github.com/YujieLyu/Focusing",
          label: "Demo",
        },
      ],
    },
  ],
  achievements: [
    {
      title: "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
      image: "/images/ai-102.png",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/JessieLyu-4400/ADDE8C4EE62706EB?sharingId=AAD093088AD962B2",
      description:
        "Certified in designing and implementing AI solutions on Microsoft Azure, including Azure OpenAI, Azure AI Search, and Document Intelligence.",
    },
    {
      title: "'Have the Courage to Make a Difference' - EOY Award (2023)",
      image: "/images/rocket.jpeg",
      description:
        "Recognised for challenging the status quo, driving innovation, and delivering meaningful organisational impact.",
    },
    {
      title: "Master of Information Technology with Distinction",
      image: "/images/unimelb-logo.png",
      description:
        "For exceptional academic performance and expertise in the field at the University of Melbourne.",
    },
  ],
  contactText: "Please feel free to get in touch via",
  contactLink: {
    url: "https://www.linkedin.com/in/yujie-jessie-lyu",
    label: "LinkedIn",
  },
}