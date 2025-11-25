import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

/* ---------------------------------------
   🔥 PREMIUM SKILL DATA (Top Skills)
-----------------------------------------*/

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
    color: "from-[#ff7b2c] to-[#d6420c]",
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
    color: "from-[#2f7bff] to-[#001aff]",
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
    color: "from-[#ffd600] to-[#ffb300]",
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
    color: "from-[#1f6feb] to-[#3182ff]",
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
    color: "from-[#00d8ff] to-[#009acd]",
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
    color: "from-[#ff2bbb] to-[#ff008c]",
  },
] as const;

/* ---------------------------------------
   🎨 FRONTEND SKILLS
-----------------------------------------*/

export const FRONTEND_SKILL = [
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
    color: "from-[#007cff] to-[#0052cc]",
  },
] as const;

/* ---------------------------------------
   ⚙ BACKEND SKILLS
-----------------------------------------*/

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
    color: "from-[#4caf50] to-[#2e7d32]",
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
    color: "from-[#eeeeee] to-[#9e9e9e]",
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 50,
    height: 50,
    color: "from-[#4caf50] to-[#2e7d32]",
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 60,
    height: 60,
    color: "from-[#ffa000] to-[#ff6f00]",
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
    color: "from-[#00758f] to-[#005f73]",
  },
] as const;

/* ---------------------------------------
   🧩 FULLSTACK / DEVOPS
-----------------------------------------*/

export const FULLSTACK_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
    color: "from-[#0db7ed] to-[#007bff]",
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
    color: "from-[#a259ff] to-[#6c1cff]",
  },
] as const;

/* ---------------------------------------
   🧪 OTHER SKILLS (empty allowed)
-----------------------------------------*/

export const OTHER_SKILL = [] as const;

/* ---------------------------------------
   🌍 SOCIALS
-----------------------------------------*/

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

/* ---------------------------------------
   🧵 PROJECT CARDS
-----------------------------------------*/

export const PROJECTS = [
  {
    title: "Modern Next.js 14 Portfolio",
    description:
      "A dynamic showcase of my skills, experiences, and passion for modern web technologies.",
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "Interactive Cards Portfolio",
    description:
      "A visually captivating platform leveraging animated cards and smooth interactions.",
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "Space Themed Website",
    description:
      "A cosmic-themed experience blending animation, particles, and immersive visuals.",
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;

/* ---------------------------------------
   🔗 FOOTER DATA
-----------------------------------------*/

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

/* ---------------------------------------
   NAVIGATION LINKS
-----------------------------------------*/

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

/* --------------------------------------- */

export const LINKS = {
  sourceCode: "https://github.com/subhankarpani",
};
