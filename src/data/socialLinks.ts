import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodingninjas } from "react-icons/si";
import type { ISocialLinkItem } from "@/types";

const socialLinks: ISocialLinkItem[] = [
  {
    name: "GitHub",
    url: "https://github.com/sachiinn05",
    icon: FaGithub,
    text: "sachiinn05",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sachin-singh0517",
    icon: FaLinkedin,
    text: "Sachin Singh",
  },
  {
    name: "Email",
    url: "mailto:sachinsingh6386@gmail.com",
    icon: FaEnvelope,
    text: "Sachinsingh6386@gmail.com",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/sachinsingh17/",
    icon: SiLeetcode,
    text: "sachiinn05",
  },
  {
    name: "Coding Ninjas",
    url: "https://www.naukri.com/code360/profile/c8bad018-c73a-402a-b7ec-bc4f5e6de1a6",
    icon: SiCodingninjas,
    text: "sachiinn05",
  },
];

export default socialLinks;
