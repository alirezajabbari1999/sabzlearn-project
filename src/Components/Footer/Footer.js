import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-container">
      <Container>
        <Row className="row">
          <Col xs={6} sm={6} md={4} lg={3} className="footer-col darbare-ma">
            <h1>درباره ما</h1>
            <p>
              سبزلرن یک اکادمی خصوصی
              <br /> آموزش برنامه نویسی هست
              <br /> که با هدف تحویل نیروی متخصص
              <br /> بر پایه تولید محتوای غیرسطحی
              <br /> فعالیت میکند
            </p>
          </Col>

          <Col xs={6} sm={6} md={4} lg={3} className="footer-col">
            <h1>دسترسی سریع</h1>
            <Link to="/" className="footer-link">
              قوانین و مقررات
            </Link>
            <Link to="/" className="footer-link">
              ارسال تیکت
            </Link>
            <Link to="/" className="footer-link">
              همه دوره ها
            </Link>
          </Col>

          <Col xs={6} sm={6} md={4} lg={3} className="footer-col">
            <h1>لینک های مفید</h1>
            <Link to="/" className="footer-link">
              آموزش جاوااسکریپت
            </Link>
            <Link to="/" className="footer-link">
              آموزش پایتون
            </Link>
            <Link to="/" className="footer-link">
              آموزش HTML
            </Link>
            <Link to="/" className="footer-link">
              آموزش CSS
            </Link>
          </Col>

          <Col xs={6} sm={6} md={4} lg={3} className="footer-col">
            <h1>شبکه های اجتماعی</h1>
            <Link to="/" className="footer-link">
              <AiFillInstagram />
              @sabzlarn_
            </Link>
            <Link to="/" className="footer-link">
              <FaTelegram />
              @sabzlearn
            </Link>
          </Col>
        </Row>

        <Row className="copy-right">
          <Col xs={12} md={6}>ساخته شده با ❤️ در سبزلرن</Col>
          <Col xs={12} md={6}>Copyright © 2019-2024 Sabzlearn. All rights reserved.</Col>
        </Row>
      </Container>
    </div>
  );
}
