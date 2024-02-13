import React, { useState, useEffect } from "react";
import "./PagesData.css";
import Layout from "./Layout";
import { Container, Row, Col } from "react-bootstrap";
import CoursesData from "../CoursesData";
import Course from "../Components/Courses/Course";
import { Link } from "react-router-dom";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function PagesData({ courseType,pageTitle }) {
  const [courses, setCourses] = useState(CoursesData);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isActive, setIsActive] = useState([false, false, false]);
  const [onlyFree, setOnlyFree] = useState(false);
  const [onlyPishForoush, setOnlyPishForoush] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let filtered = courses.filter((course) => course.type === courseType);

    if (onlyFree) {
      filtered = filtered.filter((course) => course.price === "رایگان");
    } else if (onlyPishForoush) {
      filtered = filtered.filter((course) => course.pishforoush === true);
    } else if (searchText.trim() !== "") {
      filtered = filtered.filter((course) =>
        course.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredCourses(filtered);
  }, [courses, onlyFree, onlyPishForoush, searchText]);

  const handleFilterChange = (option) => {
    let sortedCourses = [...filteredCourses];

    if (option === "inexpensive") {
      sortedCourses.sort((a, b) => a.price - b.price);
    } else if (option === "expensive") {
      sortedCourses.sort((a, b) => b.price - a.price);
    } else if (option === "popular") {
      sortedCourses.sort((a, b) => b.member - a.member);
    }
    setFilteredCourses(sortedCourses);
  };

  const resetCourses = () => {
    setFilteredCourses(courses);
  };

  const toggleClass = (index) => {
    const updatedIsActive = [...isActive];
    updatedIsActive[index] = !updatedIsActive[index];
    setIsActive(updatedIsActive);
  };

  const toggleOnlyFree = () => {
    setOnlyFree(!onlyFree);
  };

  const toggleOnlyPishForoush = () => {
    setOnlyPishForoush(!onlyPishForoush);
  };

  const searchHandle = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Layout>
      <div className="frontend-container">
        <Container>
          <h1 className="frontend-title">
            <span className="frontend-title-span"></span>{pageTitle}{" "}
          </h1>
          <Row>
            <Col sm={12} md={12} lg={3}>
              <div className="frontend-layout-right">
                <div className="frontend-sort">
                  <div className="search-box">
                    <input
                      type="text"
                      placeholder="در بین دوره ها جستجو کنید"
                      onChange={searchHandle}
                    />
                    <FiSearch size={25} color="#999" />
                  </div>

                  <div className="toggle-box">
                    <p>فقط دوره های رایگان</p>
                    <div
                      className={`side-button-box ${
                        isActive[0] ? "active" : null
                      } `}
                      onClick={() => {
                        toggleClass(0);
                        toggleOnlyFree();
                      }}
                    >
                      <div className="circle"></div>
                    </div>
                  </div>
                  <div className="toggle-box">
                    <p>در حال پیش فروش</p>
                    <div
                      className={`side-button-box ${
                        isActive[1] ? "active" : null
                      } `}
                      onClick={() => {
                        toggleClass(1);
                        toggleOnlyPishForoush();
                      }}
                    >
                      <div className="circle"></div>
                    </div>
                  </div>
                  <div className="toggle-box">
                    <p>دوره های خریداری شده</p>
                    <div
                      className={`side-button-box ${
                        isActive[2] ? "active" : null
                      } `}
                      onClick={() => toggleClass(2)}
                    >
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col sm={12} md={12} lg={9}>
              <div className="frontend-layout-left">
                <div className="filter-box">
                  <p>
                    <FaSortAmountDownAlt />
                    مرتب سازی :
                  </p>
                  <ul className="frontend-menu">
                    <li onClick={resetCourses}>همه دوره ها</li>
                    <li onClick={() => handleFilterChange("inexpensive")}>
                      ارزان ترین
                    </li>
                    <li onClick={() => handleFilterChange("expensive")}>
                      گران ترین
                    </li>
                    <li onClick={() => handleFilterChange("popular")}>
                      پرمخاطب ها
                    </li>
                  </ul>
                </div>
                <div className="frontent-course-box">
                  {filteredCourses.map((course) => (
                    <div className="course-col">
                      <Link className="courses-link" to={course.link}>
                        <Course key={course.id} {...course} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
