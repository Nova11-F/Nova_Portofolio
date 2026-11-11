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
    title: "contact.email.title",
    icon: Mail,
    label: "contact.email.label",
    value: "firmannovaprayoga@gmail.com",
    action: "mailto:firmannovaprayoga@gmail.com",
  },

  whatsapp: {
    id: "whatsapp",
    title: "contact.whatsapp.title",
    icon: MessageSquareText,
    label: "contact.whatsapp.label",
    value: "+62 813-1491-5322",
    phone: "6281314915322",
    action: "contact.whatsapp.action",
    message:
      "Halo Firman, saya tertarik untuk berdiskusi dan berkolaborasi dengan Anda.",
  },

  location: {
    id: "location",
    title: "contact.location.title",
    icon: MapPinned,
    label: "contact.location.label",
    value: "Jakarta & Surabaya, ID",
    timezone: "contact.location.timezone",
  },

  internship: {
    id: "internship",
    title: "contact.internship.title",
    icon: CalendarCheck,
    label: "contact.internship.label",
    value: "contact.internship.value",
    status: "contact.internship.status",
  },
};

export default socials;
