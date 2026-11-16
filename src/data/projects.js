import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiPython,
  SiReact,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import suppliesImg from "../assets/images/projects/supplies/suppplies_dashboard.webp"
import nutrivaImg from "../assets/images/projects/Nutriva/nutriva_dashboard.webp"
import biometrikImg from "../assets/images/projects/sistem-retina/biometrikRetina_Home.webp"
import coffesuiImg from "../assets/images/projects/cofeesui/cofeesui_cart.webp"
import bumibaikImg from "../assets/images/projects/bumi-baik/bumi-baik_dashboard.jpg"

const projects = [
    {
        id :"1",
        name :"supplies",
        title:"Projek #1",
        type: "Supply Management System",
        img: suppliesImg,
        desc :"projects.supplies.desc",
        tech :[
            {
                name: "HTML", icon: SiHtml5, color: "#E34F26"
            },
            {
                name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4"
            },
            {
                name: "JavaScript", icon: SiJavascript, color: "#F7DF1E"
            },
            {
                name: "PHP", icon: SiPhp, color: "#777BB4"
            },
            {
                name: "MySQL", icon: SiMysql, color: "#336791"
            }
        ],
    },
    {
        id :"2",
        name :"Nutriva",
        title:"Projek #2",
        type: "HealthTech",
        img: nutrivaImg,
        desc :"projects.nutriva.desc",
        tech :[
            {
                name: "HTML", icon: SiHtml5, color: "#E34F26"
            },
            {
                name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4"
            },
            {
                name: "JavaScript", icon: SiJavascript, color: "#F7DF1E"
            },
            {
                name: "React", icon: SiReact, color: "#61DAFB"
            },
        ],
    },
    {
        id :"3",
        name :"Sistem Identifikasi Biometrik Retina",
        title:"Projek #3",
        type: "Biometric Image Processing",
        img: biometrikImg,
        desc :"projects.biometrik.desc",
        tech :[
            {
                name: "Python", icon: SiPython, color: "#3776AB"
            },
        ],
    },
    {
        id :"4",
        name :"COFFEESUI CASHIER",
        title:"Projek #4",
        type: "Point of Sale (POS)",
        img: coffesuiImg,
        desc :"projects.coffesui.desc",
        tech :[
            {
                name: "HTML", icon: SiHtml5, color: "#E34F26"
            },
            {
                name: "CSS", icon: SiCss, color: "#264DE4"
            },
            {
                name: "JavaScript", icon: SiJavascript, color: "#F7DF1E"
            },
        ],
    },
    {
        id :"5",
        name :"BUMI BAIK",
        title:"Projek #5",
        type: "Sustainable E-Commerce",
        img: bumibaikImg,
        desc :"projects.bumiBaik.desc",
        tech :[
            {
                name: "HTML", icon: SiHtml5, color: "#E34F26"
            },
            {
                name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4"
            },
            {
                name: "JavaScript", icon: SiJavascript, color: "#F7DF1E"
            },
            {
                name: "TypeScript", icon: SiTypescript, color: "#3178C6"
            },
            {
                name: "Next.JS", icon: SiNextdotjs, color: "#000000"
            }
        ],
    },
    {
        id :"6",
        name :"Portfolio",
        title:"Projek #6",
        type: "Portfolio",
        img: suppliesImg,
        desc :"projects.portfolio.desc",
        tech :[
            {
                name: "HTML", icon: SiHtml5, color: "#E34F26"
            },
            {
                name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4"
            },
            {
                name: "JavaScript", icon: SiJavascript, color: "#F7DF1E"
            },
            {
                name: "React", icon: SiReact, color: "#61DAFB"
            },
        ],
    },
]

export default projects;