import {
  Code2,
  Sparkles,
  Video,
} from "lucide-react";

export interface linksType {
  name: string;
  link: string;
}

export const Links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];

// export const Exprience = [
//   {
//     company: "",
//     href: "",
//     badges: [],
//     location: "",
//     title: "",
//     logoUrl: "",
//     start: "",
//     end: "",
//     description:"",
//   },
// ];

export const Skills = [
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Prisma",
  "Postgres",
  "MongoDB",
  "AWS",
];

export const Projects = [
  {
    title: "Motion",
    description:
      "An AI based web application that lets you generate stunning animations just by describing them in natural language.",
    href: "https://github.com/manu-0990/motion",
    icon: Sparkles,
    tags: ["Next.js", "Prisma", "Postgres", "TailwindCSS", "TypeScript", "Express.js", "Google Gemini" ],
  },
  {
    title: "YT Connect",
    description:
      "A youtube studio like web app where the creator and and editor can collaborate remotely to upload a video to a creator's youtube.",
    href: "https://github.com/manu-0990/ytconnect",
    icon: Video,
    tags: ["Next.js", "Prisma", "Postgres", "TypeScript", "TailwindCSS",],
  },
];

export const UpcomingProjects = [
  {
    title: "AltCode",
    description: 
      "A leetcode clone where the next question you solve will be decided by AI, as per your current skill level.",
    href: "https://github.com/manu-0990/",
    icon: Code2,
    tags: ["Next.js", "Prisma", "Mono repo", "TailwindCSS",],
  },
];
