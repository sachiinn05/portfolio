import type { ISocialLinkItem } from "@/types";
import { IconType } from "react-icons";
import Link from "next/link";
import React from "react";

const SocialButton = ({ text, icon: Icon, url }: ISocialLinkItem) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 px-5 py-3 bg-[var(--textColor10)] rounded-[var(--borderRadius)] transition-all duration-300 hover:bg-[var(--primaryColor50)] hover:scale-105"
    >
      {typeof Icon === "function" && (
        <Icon className="text-2xl text-[var(--textColor)] group-hover:text-white transition-colors duration-300" />
      )}
      <span className="text-lg font-semibold text-[var(--textColor)] group-hover:text-white transition-colors duration-300">
        {text}
      </span>
    </Link>
  );
};

export default SocialButton;
