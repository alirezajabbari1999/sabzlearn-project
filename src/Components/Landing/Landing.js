import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import landingSvg from "./../../image/boy-light.svg";
import { Container, Row, Col } from "react-bootstrap";

export default function Landing() {
  return (
    <div className="landing-container">
      <Container>
        <Row className="landing-row">
          <Col xs={12} lg={6} className="landing-right-side">
            <h1>
              ما به هر قیمتی
              <br /> دوره تولید نمیکنیم!
            </h1>
            <p>
              با آکادمی خصوصی سبزلرن علم برنامه نویسی رو با <br />
              خیال راحت یادبگیر و پیشرفت کن
            </p>
            <div className="landing-btns">
              <Link to="/" className="start-btn">
                از اینجا شروع کن
              </Link>
              <Link to="/" className="who-i-am-btn">
                ما کی هستیم؟
              </Link>
            </div>
          </Col>

          <Col xs={12} lg={6} className="landing-left-side">
            <img src={landingSvg} alt="Landing SVG" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
