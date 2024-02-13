import React, { useState } from "react";
import "./RoadMap.css";
import { Row, Col, Container } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineSecurity } from "react-icons/md";
import { TbBrandPython } from "react-icons/tb";
import { LuPuzzle } from "react-icons/lu";
import { FaSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RoadMap() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "فرانت اند",
      icon: <CgWebsite size={40} />,
      path: "/frontend",
      color1: "#FFB535",
      color2: "#F2295B",
    },
    {
      id: 2,
      title: "امنیت",
      icon: <MdOutlineSecurity size={40} />,
      path: "/security",
      color1: "#30C4E5",
      color2: "#27E55C",
    },
    {
      id: 3,
      title: "پایتون",
      icon: <TbBrandPython size={40} />,
      path: "/python",
      color1: "#9C33F7",
      color2: "#2B9FFF",
    },
    {
      id: 4,
      title: "مهارت های نرم",
      icon: <LuPuzzle size={40} />,
      path: "/softscils",
      color1: "#FF3571",
      color2: "#870075",
    },
  ]);

  return (
    <div className="road-map-container">
      <Container>
        <div className="section-title">
          <h1>
            <FaSquare color="purple" size={17} style={{ marginLeft: "15px" }} />
            نقشه راه ها
          </h1>
          <p>نقشه های راه برای شروع اصولی یادگیری</p>
        </div>
        <Row className="row">
          {items.map((item) => (
            <Col
              key={item.id}
              xs={12}
              sm={5}
              md={5}
              lg={3}
              className="col"
              style={{
                background: `linear-gradient(to right, ${item.color1}, ${item.color2})`,
              }}
            >
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "#fff" }}
                className="link"
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
