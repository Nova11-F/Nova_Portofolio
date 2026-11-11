import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import {
  Mail,
  MessageSquareText,
  MapPinned,
  CalendarCheck,
} from "lucide-react";

const socials = {
  social: [
    {
      id: "instagram",
      name: "Instagram",
      url: "https://www.instagram.com/firnovv/",
      icon: BiLogoInstagramAlt,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "www.linkedin.com/in/firman-nova-prayoga-052203391",
      icon: BsLinkedin,
    },
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/Nova11-F",
      icon: BsGithub,
    },
  ],

  email: {
    id: "email",
    title: "Email",
    icon: Mail,
    label: "Kirim Email Langsung",
    value: "firmannovaprayoga@gmail.com",
    action: "mailto:firmannovaprayoga@gmail.com",
  },

  whatsapp: {
    id: "whatsapp",
    title: "Whatsapp / Chat",
    icon: MessageSquareText,
    label: "Direct Chat & Call",
    value: "+62 813-1491-5322",
    phone: "6281314915322",
    message:
      "Halo Firman, saya tertarik untuk berdiskusi dan berkolaborasi dengan Anda.",
  },

  location: {
    id: "location",
    title: "Location",
    icon: MapPinned,
    label: "Basis Aktivitas",
    value: "Jakarta & Surabaya, ID",
    timezone: "WIB (UTC+7)",
  },

  internship: {
    id: "internship",
    title: "Status Magang",
    icon: CalendarCheck,
    label: "Ketersediaan Magang",
    value: "Januari 2027 - Agustus 2027",
    status: "Siap Kerja On-Site",
  },
};

export default socials;
