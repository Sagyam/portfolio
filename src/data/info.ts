export const info = {
  greeting: 'Namaste 🙏',
  baseUrl: "https://www.sagyamthapa.com.np",
  name: "Sagyam Thapa",
  jobDescription: "Software Developer",
  about: `I'm  passionate coder with diverse experience and a love for technology.
   My journey began in 2019 when I won a software competition for building a tank
    battle game in Unreal Engine. Although I explored game development, my true passion
     lies in AI, particularly deep learning. I've worked on fascinating computer vision,
      NLP, and large-scale web scraping projects. Additionally, I've gained practical 
      experience through freelance web development projects. As a frontend developer at 
      Matrice AI, I optimized landing pages and built front-end solutions using React and 
      Typescript. I also contributed to e-commerce platforms and a learning management system.
       Outside of coding, I enjoy listening to podcasts, reading bestsellers, cooking, and gaming.
      I'm excited to showcase my skills and experiences, so feel free to explore my portfolio!
  `,

  heroButtons:[
    {
      text: 'Resume',
      icon: 'mdi:file-account',
      url: 'http://sagyamthapa.com.np/assets/sagyam-thapa.pdf',
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
    linkedin: "https://www.linkedin.com/in/sagyam",
  },

  projects: [
    {
      title: "Project One",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices sagittis orci a scelerisque purus semper eget. Ultrices neque ornare aenean euismod elementum nisi quis. Volutpat consequat mauris nunc congue nisi vitae. Massa tincidunt dui ut ornare lectus sit amet est placerat.",
      technologies: ['Tech 1', "Tech 2"],
      isFeatured: true,
      thumbnail: "/assets/images/astro-portfolio.png",
      githubUrl: "https://example.com",
      liveUrl: "https://example.com",
    },
    
  ],
};