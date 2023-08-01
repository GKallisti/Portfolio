import {
  mobile,
  backend,
  creator,
  gamedev,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  portfolio,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  threejs,
  thebunker,
  lobbylair,
  argencade,
  pokeapi,
  rpg,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front end Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Creative Designer",
    icon: creator,
  },
  {
    title: "Game Developer",
    icon: gamedev,
  }
 
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


];

const experiences = [
  
  {
    title: "Freelance Web Developer",
    company_name: "Rastafi",
    icon: meta,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Developing and maintaining an E-commerce web applications using React.js.",
      "Implementing responsive and creative web design.",
      "Providing the feedback from statistics of the admin dashboard to the client.",
    ],
  },
  {
    title: "Full stack Developer and Game Designer",
    company_name: "Kallisti Studios", 
    icon: meta,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Developing and structuring game mechanics.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and pair-programming providing constructive feedback to other partners.",
    ],
  },
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
    name: "Lobby Lair",
    description:
      "Web-based platform  that evokes a social network for Gamers, where the idea was to find game partners in real time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: lobbylair,
    source_code_link: "https://github.com/GKallisti/Lobbylair-Frontend",
  },
  
  {
    name: "Api Poke-Ghost",
    description:
      "Pokedex clone Api made with React, PostgreSQL and Express.js.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pokeapi,
    source_code_link: "https://github.com/GKallisti/PI-Pokemon-Frontend",
  },
  {
    name: "The Bunker Sala",
    description:
      "Landing page and online turn service made for a rehersal sala, I made it with HTML, Css, Javascript and .NET ",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: thebunker,
    source_code_link: "https://github.com/GKallisti/The-Bunker-Sala",
  },
  {
    name: "Argencade - Gaming crowfunding project",
    description:
      "Landing page crowfunding page made with HTML, Css, Javascript as a final project while coursing on UTN (National Tecnological University).",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: argencade,
    source_code_link: "https://github.com/GKallisti/Utn-Gaming-store",
  },
  {
    name: "My Portfolio",
    description:
      "Hey, you are looking at this one!.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three JS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/GKallisti/Portfolio",
  },
  {
    name: "Ugly RPG",
    description:
      "This one was my first ever project, its a minigame made on html and javascript purely made for training OOP and DOM manipulation.", 
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: rpg,
    source_code_link: "https://github.com/GKallisti/Ugly-RPG",
  },
];

export { services, technologies, experiences, testimonials, projects };
