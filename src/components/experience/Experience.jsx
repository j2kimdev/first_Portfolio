import React from "react";
import "./experience.css";
import { BsPatchCheckFill, BsStarHalf, BsStarFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {/* Project Owner */}
        <div className="experience__title">
          <h3>Project Owner</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Node JS</h4>
              <h4 className="skill__level">
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Node JS</h4>
              <h4 className="skill__level">
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Node JS</h4>
              <h4 className="skill__level">
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </h4>
            </article>
          </div>
        </div>
        {/* DA */}
        <div className="experience__title">
          <h3>Data Analysis</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Node JS</h4>
              <h4 className="skill__level">
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Node JS</h4>
              <h4 className="skill__level">
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Node JS</h4>
              <h4 className="skill__level">
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </h4>
            </article>
          </div>
        </div>
        {/* Development */}
        <div className="experience__title">
          <h3>Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Node JS</h4>
              <h4 className="skill__level">
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Node JS</h4>
              <h4 className="skill__level">
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Node JS</h4>
              <h4 className="skill__level">
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
