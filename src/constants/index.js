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
  wordpress,
  anhimalia,
  febocak,
  gorostidi,
  premier
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
    title: "Designer & Content creator",
    icon: creator,
  },
  {
    title: "Game Developer",
    icon: gamedev,
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
    name: "wordpress",
    icon: wordpress,
  }


];

const experiences = [
  
  {
    title: "Web Developer and designer",
    company_name: "Make IT Girl",
    icon: meta,
    iconBg: "#383E56",
    date: "Agoust 2023 - Present",
    points: [
      "Developing and maintaining web applications using React, Wordpress, WooCommerce and other related technologies.",
      "Implementing responsive and creative web design.",
      "Providing the feedback from statistics of the admin dashboard to the client.",
    ],
  },
  {
    title: "Content Creator",
    company_name: "Nimax pools", 
    icon: meta,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Designing atractive content for social media.",
      "Collaborating with cross-functional teams designers to create high-quality products.",
      "Video editing and correction of raw material for Social media format.",
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
    name: "Premier Muebles",
    description:
      "Design and implementation of a landing page for a furniture e-commerce.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Elementor",
        color: "pink-text-gradient",
      },
    ],
    image: premier,
    source_code_link: "https://premiermuebles.com/",
  },
  {
    name: "Gorostidi Inmobiliaria",
    description:
      "Design and implementation of a premium wordpress theme for a real estate e-commerce.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Elementor",
        color: "pink-text-gradient",
      },
    ],
    image: gorostidi,
    source_code_link: "https://gorostidiinmobiliaria.com.ar/",
  },

  {
    name: "Anhimalia",
    description:
      "Redesign and migration of a former HTML page to a brand new Wordpress Landing Page.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Elementor",
        color: "pink-text-gradient",
      },
    ],
    image: anhimalia,
    source_code_link: "https://anhimalia.org",
  },

  {
    name: "Fe.bo.ca.k.",
    description:
      "Redesign and migration of a former HTML page to a brand new Wordpress Landing Page.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Elementor",
        color: "pink-text-gradient",
      },
    ],
    image: febocak,
    source_code_link: "https://febocak.org.ar",
  },

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
    name: "Argencade",
    description:
      "Crowfunding page made with HTML, Css, Javascript as a final project while coursing on National Technologic University.",
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
      "  Hey there! You are looking at this one!.  ",
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
  }
];

export { services, technologies, experiences, testimonials, projects };
