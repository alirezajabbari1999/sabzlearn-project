// import React, { useState } from "react";
// import "./Courses.css";
// import Course from "./Course";
// import CoursesData from "./../../CoursesData";
// import { FaSquare } from "react-icons/fa";
// import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export default function Courses() {
//   const [courses, setCourses] = useState(CoursesData);

//   return (
//     <div className="courses-section">
//       <Container>
//         <div className="courses-container">
//           <div className="section-title">
//             <h1>
//               <FaSquare color="gold" size={17} style={{ marginLeft: "15px" }} />
//               آخرین دوره ها
//             </h1>
//             <p>سکوی پرتاپ شما به سمت موفقیت</p>
//           </div>
//           <Row>
//             {courses.map((course) => (
//               <Col key={course.id} xs={12} sm={6}  lg={3}>
//                 <Link className="courses-link" to={course.link}>
//                   <Course key={course.id} {...course} />
//                 </Link>
//               </Col>
//             ))}
//           </Row>
//         </div>
//       </Container>
//     </div>
//   );
// }



import React, { useState } from "react";
import "./Courses.css";
import Course from "./Course";
import CoursesData from "./../../CoursesData";
import { FaSquare } from "react-icons/fa";
import { Container, Row, Col,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Courses() {
  // const [courses, setCourses] = useState(CoursesData);

  const initialCoursesToShow = 12;
  const coursesPerPage = 8;
  const [coursesToShow , setCoursesToShow] = useState(initialCoursesToShow)

  const handleShowMore = ()=>{
    setCoursesToShow((prev)=> prev + coursesPerPage)
  }
  const visibleCourses = CoursesData.slice(0, coursesToShow);

  return (
    <div className="courses-section">
      <Container>
        <div className="courses-container">
          <div className="section-title">
            <h1>
              <FaSquare color="gold" size={17} style={{ marginLeft: "15px" }} />
              آخرین دوره ها
            </h1>
            <p>سکوی پرتاپ شما به سمت موفقیت</p>
          </div>
          <Row>
            {visibleCourses.map((course) => (
              <Col key={course.id} xs={12} sm={6}  lg={3}>
                <Link className="courses-link" to={course.link}>
                  <Course key={course.id} {...course} />
                </Link>
              </Col>
            ))}
          </Row>
          {coursesToShow < CoursesData.length && (
            <div className="show-more-btn-container">
            <Button onClick={handleShowMore} className="show-more-btn">نمایش بیشتر</Button>
          </div>
          )}
        </div>
      </Container>
    </div>
  );
}