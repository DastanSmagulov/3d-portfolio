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
  figma,
  mui,
  meta,
  starbucks,
  tesla,
  shopify,
  bankist,
  deadpoetsociety,
  todo,
  bookapp,
  threejs,
} from "../assets";

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
    id: "project",
    title : "Projects",
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
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Full stack Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "mui",
    icon: mui,
  },
];

const experiences = [
  {
    title: "Frontend-Development, and Python Teacher",
    company_name: "Hello World",
    iconBg: "#383E56",
    date: "2022(September)-2023(March)",
    points: [
      "I have taught Frontend-Development and Python to 12-18 year old teenagers.",
      " We were building some pretty cool projects, starting with simple landing pages, and 2D games.",
      "Ending with web server in dJango, and serious projects with Vanilla JS and some React.",
    ],
  },
  {
    title: "Student",
    company_name: "nFactorial School",
    iconBg: "#E6DEDD",
    date: "2022(December)-2023(May)",
    points: [
      "I have completed nFactorial Start, Web Intro and Web Advanced courses",
      " First stage was Prinstons's Computer Science program in Java language. Second one was diving into Frontend. We have covered React, Redux, Material UI, React Routers, React hooks and more.",
      "Last one was mostly about backend. We have covered Express JS, Node Js, Mongo Db, Typescript, Docker and more.",
      "This courses was a big step to my confidence, and understanding web development. My final project was a full stack MERN social media app, which you can see on my github or portfolio page.",
    ],
  },
  {
    title: "Frontend-Development tutor",
    company_name: "Gefest Academy",
    iconBg: "#383E56",
    date: "2023(April)-Now",
    points: [
      "I am teaching basic frontend development to 12-18 year old teenagers.",
      "Program consists of Web Design, HTML/CSS, Javascript, and basic Vue Js.",
      "I expand my communication, and leadership skills.",
    ],
  },
  {
    title: "Interesting facts about me",
    company_name: "Life",
    iconBg: "#E6DEDD",
    date: "March 2003 - Present",
    points: [
      "I have run half marathon",
      "I know how to play at the ukulele and guitar",
      "I love to play big tennis, and footbal"
    ],
  },
];

const projects = [
  {
    name: "Bankist App",
    description:
      "Bankist is a fictional online bank. DOM manipulation and user interaction practice. Try user:ds, pin:1111, and user:me, pin:2222.",
    tags: [
      {
        name: "dom",
        color: "blue-text-gradient",
      },
      {
        name: "vanilla js",
        color: "green-text-gradient",
      },
      {
        name: "user interaction",
        color: "pink-text-gradient",
      },
    ],
    image: bankist,
    source_code_link: "https://github.com/DastanSmagulov/Bankist-App",
  },
  {
    name: "Dead Poet Society",
    description:
      "Dead-Poet-Society is a social media for bookworms. Full Stack web app was made by MERN stack",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express js",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: deadpoetsociety,
    source_code_link: "https://github.com/DastanSmagulov/Dead-Poet-Society",
  },
  {
    name: "React ToDo List",
    description:
      "React to-do list was my first project in React js. Simple web application with basic functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react hooks",
        color: "green-text-gradient",
      },
      {
        name: "props",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/DastanSmagulov/To-Do-App-React",
  },
  {
    name: "Book App",
    description:
      "Books application with react.js. Usage of react router & router dom in order to navigate into different pages and axios and hooks like useEffect to fetch data from an API.",
    tags: [
      {
        name: "react routers",
        color: "blue-text-gradient",
      },
      {
        name: "use context",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
    ],
    image: bookapp,
    source_code_link: "https://github.com/DastanSmagulov/BookApp-in-React",
  },
];

export { services, technologies, experiences, projects };
