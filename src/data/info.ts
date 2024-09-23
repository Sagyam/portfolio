export const info = {
  greeting: 'Namaste 🙏',
  baseUrl: "https://www.sagyamthapa.com.np",
  name: "Sagyam Thapa",
  jobDescription: "Software Developer",
  about: `
  
I’m a backend and full-stack developer with experience 
in designing scalable systems, building APIs, and deploying high-performance solutions.
I’ve worked on ERP systems, observability stacks, and client reporting services,
with expertise in building robust infrastructures and ensuring efficient system performance.
I thrive in solving complex challenges, optimizing code, and creating reliable, maintainable software. 
Let’s connect to discuss how we can collaborate on impactful projects.

  `,

  heroButtons:[
    {
      text: 'Resume',
      icon: 'mdi:file-account',
      url: 'https://sagyamthapa.com.np/assets/sagyam-thapa.pdf',
      gradient: 'bg-gradient-to-r from-[#9358F7] via-[#4A9FEB] to-[#10D7E2]',
      shadow: 'shadow-[0_0px_50px_-10px] shadow-[#10D7E2]/50 hover:shadow-none',
    },
    {
      text: 'Email',
      icon: 'mdi:email',
      url: `mailto:sagyamthapa32@gmail.com`,
      gradient: 'bg-gradient-to-r from-[#6964DE] via-[#AF83E3] to-[#FCA6E9]',
      shadow: 'shadow-[0_0px_50px_-10px] shadow-[#AF83E3]/50 hover:shadow-none',
    },
    {
      text: 'LinkedIn',
      icon: 'mdi:linkedin',
      url: 'https://www.linkedin.com/in/sagyam/',
      gradient: 'bg-gradient-to-r from-[#F4426C] via-[#F7998E] to-[#FBF2B1]',
      shadow: 'shadow-[0_0px_50px_-10px] shadow-[#F7998E]/50 hover:shadow-none',
    },
    {
      text: 'Github',
      icon: 'mdi:github',
      url: 'https://github.com/sagyam',
      gradient: 'bg-gradient-to-r from-[#D24074] via-[#A12E91] to-[#6518B4]',
      shadow: 'shadow-[0_0px_50px_-10px] shadow-[#A12E91]/50 hover:shadow-none',
    },
  ],

  experience: [
    {
      name: "Bitmosys",
      location: "Full-time",
      startDate: "Feb 2024",
      endDate: "Present",
      description: [
          "-> Designed database schema and architectural diagrams and tech stack for a ERP application",
          "-> Researched and presented findings on various self managed OSS and SaaS based options for database,\n" +
          "observability, object storage, cloud providers, authentication, email and disaster recovery strategies",
          "-> Wrote the foundation code, establish coding guidelines and setup CI/CD for the frontend and backend code\n" +
          "base",
          "-> Built self managed observability stack using Loki, Grafana, Prometheus, Jaeger and Uptime-Kuma",
          "-> Build logging and tracing service to capture and send logs and traces",
          "-> Built dashboard in Grafana to visualize data from these sources",
          "-> Set up monitoring and alerting using Uptime-Kuma and Alertmanager with an escalation chain",
          "-> Deployed the said monitoring stack with appropriate level of scaling and retention",
          "-> Deployed a Postgres cluster with high availability replication, backups and logging",
          "-> Deployed a Redis cluster with high availability for storing ACL",
          "-> Deployed a Nginx as API gateway with cert manager for SSL connection",
          "-> Deployed all APIs with horizontal pod auto scaling",
          "-> Deployed a Linkerd service mesh for monitoring inter-pod latency and securing inter-pod traffic with mTLS",
          "-> Built APIs and CRUD endpoints using NestJS following best coding practises",
          "-> Introduced practise of documenting and diagramming important parts of the project",
          "-> Built a service for sending emails with retry logic and recording the mail for archival purpose",
          "-> Built a cluster wide distributed rate limiter for preventing abuse of resources",
          "-> Build service for asynchronously generating, storing and mailing various types of pdf documents",
      ],
      url: 'https://www.linkedin.com/company/bitmosys/mycompany/',
    },
      {
      name: "Cango",
      location: "Freelance",
      startDate: "Nov 2023",
      endDate: "Sept 2024",
      description: [
        "->  Component Library: Built an reusable component library with over 25 components from a new design system",
        "->  Dashboards: Built dashboards with said UI components for users with varying permission levels",
        "->  Form builder: Built a google forms like form builder to capture survey response from voters",
        "->  Data Visualization: Build dashboard using Apache ECharts to visualize the responses captured from the said surveys",
        "->  Refactor: Refactored legacy code to typescript following best practises for type safety",
        "->  Optimizations: Reduced over fetching and fetching states with React Query"
      ],
      url: 'https://cangoapp.ca/',
    },
      {
      name: "Talent Exploriz",
      location: "Freelance",
      startDate: "Jan 2022",
      endDate: "Jun 2023",
      description: [
        "->  Built frontend for a event management app talentexploriz using React, Typescript, Tailwind CSS",
        "->  Built a fully functional backend with JWT based authentication and using Typescript, NodeJS",
        "->  Deployed the applciation by building a CI pipeline usign Github Actions on AWS Amplify, EC2, S3 Buckets, MongDB Atlas  ",
      ],
      url: 'https://www.talentexploriz.com.np/',
    },
    {
      name: "Matrice AI",
      location: "Full-time",
      startDate: "Jun 2022",
      endDate: "Jun 2023",
      description: [
        "-> Landing Page: Built a SEO and speed optimized landing page for matrice.ai using NextJS.",
        "-> Dashboard: Built the front-end for matrice.ai data annotation, training and inference platform using React and Typescript.",
        "-> Data Labeling Platform: Built back-end for annotation platform with using NodeJS and Docker and integrated it with other micro-services and deployed it in AWS.",
      ],
      url: 'https://matrice.ai',
    },
    {
      name: "Alhasant Technologies Ltd",
      location: "Intership",
      startDate: "Summer",
      endDate: "2021",
      description: [
        "-> Makers Asylum: Responsible for creating a learning management system from Figma designs using vanilla JavaScript and Firebase as the back-end. ",
      ],
      url: 'https://makersasylum.com',
    },
  ],

  education: [
    {
      name: "Kantipur Engineering College",
      location: "Kathmandu, Nepal",
      startDate: "2017",
      endDate: "2021",
      description: [
        "Bachelor on Computer Engineering",
      ],
    },
  ],

  socialMedia: {
    github: "https://github.com/sagyam",
    email: "mailto:sagyamthapa32@gmail.com",
    linkedin: "https://linkedin.com/in/sagyam",
  },

  projects: [
    {
      title: "Talent Exploreiz",
      description: "An event management platform that helps organizations to manage events and participants.",
      technologies: ['React', "Nodejs", "Typescript", "Tailwind CSS"],
      isFeatured: true,
      thumbnail: "/assets/images/talnet-exploriz.png",
      githubUrl: "",
      liveUrl: "https://talentexploriz.com.np/",
    },
    {
      title: "Handwritten Equation Solver and Visulalizer",
      description: "Final year project. Web application that can solve and plot Handwritten Polynomial and Linear Equations.",
      technologies: ['Tensorflow', "Python", "Django"],
      isFeatured: true,
      thumbnail: "/assets/images/hesv.jpeg",
      githubUrl: "https://github.com/Sagyam/hesv-api",
      liveUrl: "https://sagyam.github.io/hesv-app/",
    },
    {
      title: "DevCamper API",
      description: "Backend API for DevCamper application, which is a bootcamp directory website",
      technologies: ['Express', "Nodejs", "JWT"],
      isFeatured: true,
      thumbnail: "/assets/images/dev-camper.jpeg",
      githubUrl: "https://github.com/Sagyam/devCamper",
      liveUrl: "https://devcamper.up.railway.app",
    },
    {
      title: "Web Scraper",
      description: "A crawler that scrapes news from various nepali news portals.",
      technologies: ['Python', "Scrapy"],
      isFeatured: true,
      thumbnail: "/assets/images/scrapy.png",
      githubUrl: "https://github.com/Sagyam/Nepali-News-Scraper",
      liveUrl: "",
    },
    {
      title: "Study Buddy",
      description: "StudyBuddy is discord like website for finding for people to study together.",
      technologies: ['Python', "Django", "SQLite"],
      isFeatured: true,
      thumbnail: "/assets/images/study-buddy.png",
      githubUrl: "https://github.com/Sagyam/StudyBudddy",
      liveUrl: "",
    },
  ],
};
