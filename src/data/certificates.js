
import { Cloud, Code2 } from "lucide-react";

import sertif1 from "../assets/images/certificates/sertif_Belajar Dasar Pemrograman Web.webp";
import sertif2 from "../assets/images/certificates/sertif_Belajar Dasar Pemrograman JavaScript.webp";
import sertif3 from "../assets/images/certificates/sertif_Belajar Membuat Front-End Web untuk Pemula.webp";
import sertif4 from "../assets/images/certificates/sertif_Cloud Essentials - Knowledge Badge.webp";

const certificates = [
  {
    id: "1",
    img: sertif1,
    type: "Web Development",
    title_certificate: "Belajar Dasar Pemrograman Web",
    provider: "Dicoding",
    icon: Code2,
  },
  {
    id: "2",
    img: sertif2,
    type: "Web Development",
    title_certificate: "Belajar Dasar Pemrograman JavaScript",
    provider: "Dicoding",
    icon: Code2,
  },
  {
    id: "3",
    img: sertif3,
    type: "Web Development",
    title_certificate: "Belajar Membuat Front-End Web untuk Pemula",
    provider: "Dicoding",
    icon: Code2,
  },
  {
    id: "4",
    img: sertif4,
    type: "Cloud Computing",
    title_certificate: "Cloud Essentials - Knowledge Badge",
    provider: "AWS",
    icon: Cloud,
  },
];

export default certificates;
