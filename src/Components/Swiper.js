import React, { useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CoursesData from "../CoursesData";
import { Link } from "react-router-dom";
import Course from "./Courses/Course";

SwiperCore.use([Autoplay]);

export default function SwiperCarousel() {
  const [courses, setCourses] = useState(CoursesData);
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        speed={3000}
        breakpoints={{
          240: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {courses.map((course) => (
          <SwiperSlide>
            <Link className="courses-link" to={course.link}>
              <Course key={course.id} {...course} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
