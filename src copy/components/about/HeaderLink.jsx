import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

const HeaderLink = () => {
  return (
    <div className="header__link">
      <a href="https://linkedin.com/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.notion.so/" target="_blank">
        <SiNotion />
      </a>
    </div>
  );
};

export default HeaderLink;
