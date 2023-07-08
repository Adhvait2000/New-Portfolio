import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker, 
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import fitnessApp from '../assets/fitnessApp.png'
import realEstate from '../assets/realEstate.png'
import c_prog from '../assets/tech/c_prog.png'
import javaLogo from '../assets/tech/javaLogo.png'
import pythonLogo from '../assets/tech/pythonLogo.png'
import gStack from '../assets/company/gStack.png'
import yayoi from '../assets/company/yayoi.png'

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
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "Python",
    icon: pythonLogo,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: javaLogo,
  },
  {
    name: "c programming",
    icon: c_prog,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "GStack PTE LTD",
    icon: gStack,
    iconBg: "#383E56",
    date: "May 2022 - August 2022",
    points: [
      "Acquired knowledge of the ServiceNow platform by shadowing a senior developer",
      "Developed a project for NCS (National Computer Systems) by applying ServiceNow software and JavaScript.",
      "Analyzed meetings with clients to understand requirements and provided solutions to needs; Enhanced interpersonal skills.",
    ],
  },
  {
    title: "Service Crew",
    company_name: "YAYOI Singapore",
    icon: yayoi,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "Collaborated with a team to efficiently serve food to customers, ensuring timely delivery and excellent service",
      "Demonstrated versatility by actively supporting kitchen operations, including cleaning and prepping dishes to ensure a smooth workflow.",
      "Adapted quickly to fast-paced environment, prioritizing tasks and multitasking effectively to meet customer demands and expectations.",
      "Operated the cashier effectively, accurately processing payments and maintaining a high level of attention to detail.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HomeSearch",
    description:
      "Website that makes it easier for users to buy and rent houses in Singapore. It simplifies the house-hunting process and provides a seamless user experience.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "jupyter",
        color: "pink-text-gradient",
      },
    ],
    image: realEstate,
    source_code_link: "https://github.com/Adhvait2000/HomeSearch-Website",
  },
  {
    name: "Basketball Analysis",
    description:
      "A machine learning analysis to predict the NBA All-Stars for the 2020-2021 season and, analyse the effectiveness of Home Court Advantage.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "jupyter",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Adhvait2000/NBA-All-Strs",
  },
  {
    name: "Fitness Exercise Finder",
    description:
      "A web application designed to provide a convenient solution for finding exercises quickly and conveniently.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fitnessApp,
    source_code_link: "https://github.com/Adhvait2000/fitness_app",
  },
];

export { services, technologies, experiences, testimonials, projects };