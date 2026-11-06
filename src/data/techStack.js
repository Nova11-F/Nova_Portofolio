import { desc } from "framer-motion/client";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiPython,
  SiReact,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

const techStack = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26", desc: "Markup Language" },
  { name: "CSS", icon: SiCss, color: "#264DE4", desc: "Styling Language" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", desc: "Programming Language" },
  { name: "PHP", icon: SiPhp, color: "#777BB4", desc: "Backend Language" },
  { name: "Python", icon: SiPython, color: "#3776AB", desc: "Programming Language" },
  { name: "React", icon: SiReact, color: "#61DAFB", desc: "Frontend Library" },
  { name: "MySQL", icon: SiMysql, color: "#336791", desc: "Relational Database" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", desc: "NoSQL Database" },
];

export default techStack;