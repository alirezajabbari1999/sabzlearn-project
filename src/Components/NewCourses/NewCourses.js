import React from "react";
import "./NewCourses.css";
import { Container } from "react-bootstrap";
import { FaSquare } from "react-icons/fa";
import SwiperCarousel from "../Swiper";

export default function NewCourses() {
  return (
    <div className="carousel">
      <Container className="container">
        <div className="section-title">
          <h1>
            <FaSquare
              color="#2ed573"
              size={17}
              style={{ marginLeft: "15px" }}
            />
            جدیدترین دوره ها
          </h1>
          <p>یادگیری و رشد توسعه فردی</p>
        </div>

        <SwiperCarousel></SwiperCarousel>
      </Container>
    </div>
  );
}
