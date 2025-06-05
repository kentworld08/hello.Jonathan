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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  startup,
  truewishEnergy,
  SassApp,
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
    title: "Next.js Developer",
    icon: mobile,
  },
  {
    title: "React.js Developer",
    icon: backend,
  },
  {
    title: "JavaScript Developer",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Freelance",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "Freelance",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using JavaScript, React.js, Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "JavaScript Developer",
    company_name: "Freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using JavaScript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jonathan proved me wrong.",
    name: "Jonah Meekness",
    designation: "CFO",
    company: "JJJ Enterprises",
    image: "/meekness.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jonathan does.",
    name: "Julius Okai",
    designation: "PM",
    company: "Flick",
    image: "/julius.jpg",
  },
  {
    testimonial:
      "After Jonathan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Rose Adebo",
    designation: "CEO",
    company: "456 Enterprises",
    image: "/Rose.jpg",
  },
];

const projects = [
  {
    name: "Start-Up Directory",
    description:
      "Web application that features and promotes emerging startups, built using Next.js and powered by Sanity CMS for flexible content management and seamless user experience.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity.io",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      },
    ],
    image: startup,
    source_code_link: "https://github.com/kentworld08/startup-directory",
    live_demo: "https://startup-directory-anfo.vercel.app/",
  },
  {
    name: "Sass App",
    description:
      "SaaS platform enabling real time AI-powered teaching,offering interactive virtual classrooms with intelligent features for scalable efficient online learning experiences.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "Cerk",
        color: "green-text-gradient",
      },
    ],
    image: SassApp,
    source_code_link: "https://github.com/kentworld08/Saas-App",
    live_demo: "https://saas-app-indol.vercel.app/",
  },
  {
    name: "Truewish Energy",
    description:
      "Website for TrueWish Energy, offering high-quality solar panels, inverters, and system kits for commercial use—promoting sustainable energy solutions for a greener future.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Scss",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: truewishEnergy,
    source_code_link: "https://github.com/kentworld08/Truewish-Energy",
    live_demo: "https://truewish-energy.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
