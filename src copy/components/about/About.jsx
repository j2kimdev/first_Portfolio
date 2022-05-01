import React from "react";
import "./about.css";
import ME from "../../assets/me2p.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsCodeSquare } from "react-icons/bs";
import HeaderLink from "./HeaderLink";

const About = () => {
  return (
    <section id="about">
      <h3>Hello I'm</h3>
      <h1>Jake Kim </h1>
      <h5 className="text-light">Project Owner x Beginner Developer</h5>
      <HeaderLink />
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>10+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Multi Player</h5>
              <small>A to Z Business Skills</small>
            </article>
            <article className="about__card">
              <BsCodeSquare className="about__icon" />
              <h5>Developer</h5>
              <small>Beginner Programmer</small>
            </article>
          </div>
          <p>
            광고 쇼핑 등 IT 주요 산업 영역에서 스타트업부터 대기업까지
            기획/운영/관리 등 다양한 포지션을 통해 수많은 프로젝트를 A ~ Z 까지
            수행하였습니다.
          </p>
          <a href="#contact" className="btn btn-primary">
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
