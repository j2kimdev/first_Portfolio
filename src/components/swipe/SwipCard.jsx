import React from "react";
import "./swipcard.css";
import { MdOutlineAnalytics } from "react-icons/md";
import { AiOutlineDatabase } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";

const data = [
  {
    icon: <MdOutlineAnalytics />,
    title: "Project 01",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rem veniam, dolorem perferendis unde aliquid sed recusandae corrupti sapiente, officiis delectus reiciendis a magni dolorum suscipit culpa natus nisi aperiam!",
  },
  {
    icon: <AiOutlineDatabase />,
    title: "Project 02",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima commodi nisi modi, tempore tempora, nihil iure non deserunt soluta, nostrum alias in autem quae repellendus doloribus exercitationem quos corrupti.",
  },
  {
    icon: <FaReact />,
    title: "Project 03",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rem veniam, dolorem perferendis unde aliquid sed recusandae corrupti sapiente, officiis delectus reiciendis a magni dolorum suscipit culpa natus nisi aperiam!",
  },
  {
    icon: <SiNodedotjs />,
    title: "Project 04",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rem veniam, dolorem perferendis unde aliquid sed recusandae corrupti sapiente, officiis delectus reiciendis a magni dolorum suscipit culpa natus nisi aperiam!",
  },
];

const SwipeCard = () => {
  return (
    <div id="swipeCard">
      <Swiper
        className="container swipeCard__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ icon, title, review }, index) => {
          return (
            <SwiperSlide key={index} className="swipeCard">
              <div className="business__icon">{icon}</div>
              <div className="cardContents">
                <h3 path="/portfolio" className="client__name">
                  {title}
                </h3>
                <small className="business__review">{review}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwipeCard;
