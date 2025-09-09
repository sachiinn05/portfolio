import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconType } from "react-icons";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import { FlipWords } from "@/components/common/FlipWords";
import socialLinks from "@/data/socialLinks";
import TalkButton from "./ui/TalkButton";
import Image from "next/image";
import React from "react";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  const renderIcon = (icon: unknown) => {
    const IconComponent = icon as IconType;
    return <IconComponent className="w-6 h-6" />;
  };

  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 pt-16 z-20 items-center justify-center">
        <Column classNames="w-full items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl dark:text-[var(--textColor)] text-[var(--textColor)] font-bold text-center">
              Hi there, I am
            </p>
            <FlipWords
              words={["Sachin Singh", "@sachinsingh6386."]}
              className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl dark:text-[var(--primaryColor)] text-[var(--primaryColor)] font-bold text-center"
            />
          </div>
          <p className="text-sm sm:text-base dark:text-[var(--textColorLight)] text-[var(--textColorLight)] mt-2">
            Fullstack Developer 💻 SDE 🛠️
          </p>

          <div className="gap-4 mt-8 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row items-center justify-center">
            <TalkButton />
            <Link
              href="https://drive.google.com/drive/folders/1yzHtxTTIpQzvixPygd3Xqlmh_EoCL9qP?q=sharedwith:public%20parent:1yzHtxTTIpQzvixPygd3Xqlmh_EoCL9qP"
              passHref
            >
              <span className="inline-block px-6 py-2 bg-[var(--primaryColor)] text-white rounded-lg text-center cursor-pointer hover:bg-[var(--primaryColorDark)] transition-colors duration-300">
                View Resume
              </span>
            </Link>
          </div>
        </Column>

        <div className="mt-10 sm:mt-14 w-full flex flex-col items-center">
          <p className="text-base sm:text-lg font-medium mb-4">
            Follow me here
          </p>

          <Row classNames="flex-wrap justify-center gap-4">
            {socialLinks.slice(0, 5).map((link, index) => (
              <Link
                key={`social-link-${index}`}
                href={link.url}
                target="_blank"
                aria-label={`${link.name}`}
                className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[var(--textColor)] hover:border-[var(--primaryColor)] transition-all duration-300 bg-[var(--bgColor)] hover:bg-[var(--primaryColorLight)] shadow-md hover:shadow-lg"
              >
                <span className="text-[var(--textColor)] group-hover:text-[var(--primaryColorDark)] transition-colors duration-300">
                  {renderIcon(link.icon)}
                </span>
              </Link>
            ))}
          </Row>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
