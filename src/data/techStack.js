import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiPython,
  SiReact,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const techStack = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26", desc: "Markup Language", progres: "90%" },
  { name: "CSS", icon: SiCss, color: "#264DE4", desc: "Styling Language", progres: "90%"},
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", desc: "Programming Language", progres: "80%" },
  { name: "PHP", icon: SiPhp, color: "#777BB4", desc: "Backend Language", progres: "70%" },
  { name: "Python", icon: SiPython, color: "#3776AB", desc: "Programming Language", progres:"70%" },
  { name: "React", icon: SiReact, color: "#61DAFB", desc: "Frontend Library", progres:"75%" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", desc: "Modern Utility", progres:"90%" },
  { name: "MySQL", icon: SiMysql, color: "#336791", desc: "Relational Database", progres: "75%" },
];

export default techStack;