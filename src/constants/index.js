import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  java,
  python,
  docker,
  jenkins,
  kubernetes,
  powerbi,
  tableau,
  terraform,

  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud Engineer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Visualization",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Docker",
    icon: docker,
  },
    {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sumit's guidance during the ByteBattle Hackathon helped us move from concept to implementation within hours.",
    name: "Rohan",
    designation: "Student Innovator",
    company: "Harvest International School",
    image: firstTestimonial,
  },
  // {
  //   testimonial:
  //     "Sumit's expertise in CI/CD and deployment pipelines transformed our development workflow. His mentorship gave us clarity, speed, and confidence during Smart India Hackathon.",
  //   name: "Shreyas Kulkarni",
  //   designation: "Hackathon Teammate",
  //   company: "SIH 2024",
  //   image: secondTestimonial,
  // },
  {
    testimonial:
      "Working with Sumit on 'E-Sangrahan' was one of the most rewarding collaborations. His ability to merge technical precision with social impact is rare and inspiring.",
    name: "Aarav Vashistha",
    designation: "Student",
    company: "Amrita School of Computing",
    image: thirdTestimonial,
  },
];


export const certificates = [
  {
    title: "AWS Cloud Intrroduction",
    image: "/certificates/aws_introduction.png",  // Path relative to your 'public' folder
    link: "https://www.credly.com/badges/da497350-5391-4723-a7a9-d3dbceda7324/print",
  },
  {
    title: "AWS Cloud Foundation",
    image: "/certificates/aws_foundation.png",  // Path relative to your 'public' folder
    link: "https://example-link-to-certificate.com",
  },
  {
    title: "Python for Data Science - IBM",
    image: "/certificates/Python_datascience.png",
    link: "https://courses.cognitiveclass.ai/certificates/dbcfd96df4be4eb39b17252b07070365",
  },
  {
    title: "DataBase Management System - Infosys",
    image: "/certificates/dbms.png",
    link: "https://verify.onwingspan.com",
  },
  {
    title: "Power BI Certification - Infosys",
    image: "/certificates/powerbi.png",
    link: "https://verify.onwingspan.com",
  },
];


const projects = [
  {
    name: "Automated Deployment Pipeline for FoodTech Application",
    description:
    "This project focuses on creating an automated deployment pipeline for a FoodTech application using Jenkins, Docker, and Kubernetes. The pipeline automates the build, test, and deployment processes, ensuring that new features and updates are delivered quickly and reliably.", 
    tags: [
      {
        name: "jenkins",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Terraform",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/Ssumit09/Automated-Deployment-Pipeline-for-FoodTech-Application",
  },
  {
    name: "JAMES: Legal Intelligence & Case Management System",
    description:
      "A comprehensive platform to efficiently manage judges, lawyers, and case details, streamlining judicial administrative tasks and promoting transparency. It offers a user-friendly interface for easy navigation and access to essential information.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-Sangrahan – E-Waste Management System",
    description:
      "E-Sangrahan is a web-based platform designed to facilitate the collection and recycling of electronic waste. It connects users with e-waste recyclers, ensuring responsible disposal and promoting environmental sustainability.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "white-text-gradient",
      },
      {
        name: "Sustainability",
        color: "green-text-gradient",
      },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
    ],
    image: project3,
    source_code_link: "https://github.com/N1SCHALSMALAGATTI/Hackathon_web",
  },

  {
    name: " End-to-End CI/CD Pipeline for To-Do List WebApp",
    description:
      "Developed and containerized a To-Do List WebApp using Docker and deployed it on AWS EC2 for scalable access. Automated the build, test, and deployment process using Jenkins pipelines, ensuring fast and reliable delivery.",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "CI/CD",
        color: "white-text-gradient",
      },
      {
        name: "Jenkins",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/N1SCHALSMALAGATTI/Hackathon_web",
  },

  {
    name: "Smart AQI – Air Quality Prediction System",
    description:
      "Developed and containerized a To-Do List WebApp using Docker and deployed it on AWS EC2 for scalable access. Automated the build, test, and deployment process using Jenkins pipelines, ensuring fast and reliable delivery.",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "CI/CD",
        color: "white-text-gradient",
      },
      {
        name: "Jenkins",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/N1SCHALSMALAGATTI/Hackathon_web",
  },

  {
    name: "Citizen Feedback Mining for Governance Improvement",
    description:
      "Analyzed public sentiment towards government schemes using NLP to uncover trends and feedback patterns.Provided actionable insights to help policymakers improve governance and policy effectiveness.",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "white-text-gradient",
      },
      {
        name: "Sentiment Analysis",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/N1SCHALSMALAGATTI/Hackathon_web",
  },
];

export { services, technologies, experiences, testimonials, projects };
