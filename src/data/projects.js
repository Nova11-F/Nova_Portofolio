import techStack from "./techStack";

const getTech = (...names) =>
  techStack.filter((item) => names.includes(item.name));

import suppliesImg from "../assets/images/projects/supplies/suppplies_dashboard.webp";
import nutrivaImg from "../assets/images/projects/Nutriva/nutriva_dashboard.webp";
import biometrikImg from "../assets/images/projects/sistem-retina/biometrikRetina_Home.webp";
import coffesuiImg from "../assets/images/projects/cofeesui/cofeesui_cart.webp";
import bumibaikImg from "../assets/images/projects/bumi-baik/bumi-baik_dashboard.jpg";
import portfolioImg from "../assets/images/projects/portofolio/portfolio.webp"

const projects = [
  {
    id: "1",
    name: "supplies",
    title: "Project #1",
    type: "Supply Management System",
    img: suppliesImg,
    desc: "projects.supplies.desc",
    tech: getTech("HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"),
    url: "https://github.com/Nova11-F/Supplies",
  },
  {
    id: "2",
    name: "Nutriva",
    title: "Project #2",
    type: "HealthTech",
    img: nutrivaImg,
    desc: "projects.nutriva.desc",
    tech: getTech("HTML", "Tailwind CSS", "JavaScript", "React"),
    url: "https://github.com/Nova11-F/Nutriva",
  },
  {
    id: "3",
    name: "Sistem Identifikasi Biometrik Retina",
    title: "Project #3",
    type: "Biometric Image Processing",
    img: biometrikImg,
    desc: "projects.biometrik.desc",
    tech: getTech("Python"),
    url: "https://github.com/Nova11-F/coffeesui-cashier",
  },
  {
    id: "4",
    name: "COFFEESUI CASHIER",
    title: "Project #4",
    type: "Point of Sale (POS)",
    img: coffesuiImg,
    desc: "projects.coffesui.desc",
    tech: getTech("HTML", "CSS", "JavaScript"),
    url: "https://github.com/Nova11-F/coffeesui-cashier",
  },
  {
    id: "5",
    name: "BUMI BAIK",
    title: "Project #5",
    type: "Sustainable E-Commerce",
    img: bumibaikImg,
    desc: "projects.bumiBaik.desc",
    tech: getTech(
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Next.JS",
    ),
    url: "https://github.com/Nova11-F/Bumi_Baik",
  },
  {
    id: "6",
    name: "Portfolio",
    title: "Project #6",
    type: "Portfolio",
    img: portfolioImg,
    desc: "projects.portfolio.desc",
    tech: getTech("HTML", "Tailwind CSS", "JavaScript", "React"),
    url: "https://github.com/Nova11-F/Nova_Portofolio",
  },
];

export default projects;
