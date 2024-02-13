import React, { useState } from "react";
import "./PopularCourses.css";
import PopularCoursesData from "./PopularCoursesData";
import Course from "../Courses/Course";
import { FaSquare } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PopularCourses() {
  const [courses, setCourses] = useState(PopularCoursesData);

  return (
    <div className="popular-courses-container">
      <Container>
      <div className="section-title">
            <h1>
              <FaSquare color="#2ed573" size={17} style={{ marginLeft: "15px" }} />
              محبوب ترین دوره ها
            </h1>
            <p>پرمخاطب ترین و بهترین دوره های سبزلرن</p>
          </div>
        <Row>
          {courses.map((course) => (
            <Col xs={12} sm={6} lg={3}>
              <Link to='/' className="courses-link">
                <Course key={course.id} {...course}></Course>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
