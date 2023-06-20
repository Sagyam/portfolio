export const info = {
  greeting: 'Namaste 🙏',
  baseUrl: "https://www.sagyamthapa.com.np",
  name: "Sagyam Thapa",
  jobDescription: "Software Developer",
  about: `
  
  I'm  engineer with diverse experience and a love for everythng computer science.
  My journey began in 2019 when I won a software competition for building a tank
  battle game in Unreal Engine. Since then I explored areas like game development, 
  deep learning mainly computer vision and nlp 
  and automation like web scraping.
  
  Additionally, I've gained practical 
  experience through freelance projects. As a frontend developer at 
  Matrice AI, I have learnt to build peroformance optimized web apps for 
  for small and large companies.
  
  I'm currently looking for opportunities to grow my skills and 
  to learn more about the world of computer science.
  
  I'm a self taught programmer, I'm always looking for new things to learn.

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
      location: "Remote",
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
      name: "Soezze Ecommerce",
      location: "Kathmandu,, Nepal",
      startDate: "Winter",
      endDate: "2021",
      description: [
        "-> E-commerce Platform: Designed and built a e-commerce website and admin dashboard for Soezze. ",
      ],
      url: 'https://soezze.com',
    },
    {
      name: "Alhasant Technologies Ltd",
      location: "Remote",
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
      technologies: ['React', "Nodejs"],
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
      githubUrl: "https://github.com/Sagyam/Major-Project-Backend",
      liveUrl: "",
    },
    {
      title: "DevCamper API",
      description: "Backend API for DevCamper application, which is a bootcamp directory website",
      technologies: ['Express', "Nodejs", "JWT"],
      isFeatured: true,
      thumbnail: "/assets/images/dev-camper.jpeg",
      githubUrl: "https://github.com/Sagyam/devCamper",
      liveUrl: "https://devcamper-production-5d2e.up.railway.app",
    },
    
  ],
};
