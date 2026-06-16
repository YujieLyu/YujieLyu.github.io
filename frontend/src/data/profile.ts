import type { ProfileData } from '../types'

export const profileData: ProfileData = {
  name: "Yujie(Jessie) LYU",
  nickname: "Jessie",
  subtitle: "Hi, my name is",
  tagline: "Crafting Digital Solutions Across Platforms.",
  heroDescription:
    "Full stack enthusiast specialising in microservices, mobile app, and web development. Passionate about crafting seamless digital experiences, blending modern tech for style and performance.",
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
    "I'm a self-motivated full stack engineer specializing in microservices architecture and development with .NET 8, cross-platform mobile solutions, and web frontend development.",
    "I aim to leverage my technical expertise, innovative ideas, and problem-solving skills to create value and accelerate self-development.",
  ],
  techStack: [
    ".NET",
    "Progressive Web Apps",
    "Sitecore Search",
    "Next.js",
    "Azure",
    "React",
    "Android",
    "SQL & NoSQL",
    "C#",
    "Java",
  ],
  experiences: [
    {
      company: "IE",
      companyUrl: "https://www.ie.com.au/",
      role: "Software Engineer",
      period: "Feb 2020 - present",
      tooltip: "Working as a Software Engineer at IE",
      description:
        "I am currently working as a full stack software developer at IE in Melbourne, VIC. My current role encompasses microservices development with .NET 8, Sitecore 10 Headless and MVC, Sitecore Search, and Progressive Web Apps development crossing Lexus branch website, dealer sites and Lexus Encore app.",
      bullets: [
        "Full-stack development in a fast-paced Agile team, collaborating across functions to deliver high-quality solutions.",
        "Designed and implemented the transformation of the Lexus Encore Xamarin app into a Progressive Web App, reducing maintenance costs, improving performance, and unifying mobile and web experiences.",
        "Led the development of Lexus Search core functionality using Sitecore Search, including source indexing and API development, delivering the project within 3 months.",
        "Collaborated with Business Analysts to define backend and mobile development requirements for the Lexus eCommercialisation project, leading the dev team to deliver in 2 months.",
        "Built microservices to decouple frontend and backend dependencies, improving system stability and interaction efficiency.",
        "Developed RESTful APIs with dynamic data structure support, streamlining form submissions and enhancing system maintainability.",
        "Proficient in CI/CD and DevOps tools (Azure), project management tools (Jira, Confluence), and modern tech stacks (.NET, Sitecore).",
        "Proven ability to quickly adapt to new technologies and manage risks in large-scale projects.",
        "Demonstrated strong communication skills, both written and verbal, and effectively used visual tools like mind maps to enhance collaboration and reduce communication barriers.",
      ],
      projectUrl: "https://www.lexus.com.au/owners/apps/lexus-app",
      projectLabel: "View the project",
    },
    {
      company: "Startupbootcamp",
      companyUrl: "",
      role: "Web Developer Intern",
      period: "Mar 2019 – Jun 2019",
      tooltip: "Worked as a Web Developer Intern at Startupbootcamp",
      description:
        "I worked as part of the software developing Agile team in creative full-stack development (based on PHP Laravel framework, WordPress, Tailwind CSS, Vue.js, RESTful web services) at Startupbootcamp in Melbourne, VIC.",
      bullets: [],
    },
  ],
  education: [
    {
      degree: "Master of Information Technology (with Distinction)",
      institution: "The University of Melbourne",
      institutionUrl: "https://www.unimelb.edu.au/",
      period: "2017 - 2019",
      details: [
        "WAM: 80/100",
        "Main Subjects: Software Modelling and Design, Database System & Information Modelling, Distributed Systems, Mobile Computing Systems Programming, Software Processes and Management, Social Computing, Algorithms and Complexity.",
      ],
    },
  ],
  projects: [
    {
      title: "Lexus Encore App",
      image: "/images/lexus-app.jpg",
      tags: [
        "Progressive Web Apps",
        "Sitecore 10",
        "Sitecore Search",
        ".NET",
        "Microservices",
      ],
      description:
        "A new digital product will ultimately help achieve Lexus's vision of becoming a leader in making luxury personal.",
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
        "Focusing is an Android application for self-control of smartphone application usage for my graduation computing project.",
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
      title: "Have the Courage to Make a Difference Award Winner",
      image: "/images/rocket.jpeg",
      description:
        "For my ability to challenge the status quo and genuinely enable the freedom to innovate.",
    },
    {
      title: "Master of Information Technology with Distinction",
      image: "/images/unimelb-logo.png",
      description:
        "For my exceptional academic performance and expertise in the field.",
    },
  ],
  contactText: "Please feel free to get in touch via",
  contactLink: {
    url: "https://www.linkedin.com/in/yujie-jessie-lyu",
    label: "LinkedIn",
  },
}