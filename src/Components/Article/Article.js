import React, { useState } from "react";
import "./Article.css";
import { Container, Row, Col } from "react-bootstrap";
import articleImg1 from "./../../image/aticle-class-in-js.webp";
import articleImg2 from "./../../image/article-boolean-in-python.webp";
import articleImg3 from "./../../image/article-error-in-python.webp";
import articleImg4 from "./../../image/article-alert-in-js.webp";
import { CiUser } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { FaSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Article() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "آموزش boolean در پایتون",
      desc: "مقادیر boolean در پایتون یعنی True و False، واقعاً جذاب هستند! آن‌ها مانند پلیس و دزد هستند که به برنامه‌نویسان کمک می‌کنند تا جهان منطقی خود را بسازند. این دو…",
      teacher: "شقایق ستیه نیا",
      date: "1402/11/16",
      image: articleImg2,
    },

    {
      id: 2,
      title: "آموزش دستور alert در جاوا اسکریپت",
      desc: "هنگامی‌که از برخی از وب‌سایت‌ها بازدید می‌کنیم پاپ‌آپ‌ها یا پنجره‌های بازشویی در صفحه ظاهر می‌شوند و حاوی پیغامی یا تبلیغی برای ما هستند. این جعبه‌های هشدار (Message box...",
      teacher: "کامل بهرامی",
      date: "1402/11/14",
      image: articleImg4,
    },

    {
      id: 3,
      title: "آموزش مدیریت خطا در پایتون",
      desc: "در مسیر جادویی آموزش برنامه‌نویسی پایتون، مسائلی چون خطاها  و استثناها همواره ما را دچار چالش‌های جدید می‌کند. اگر شما هم به دنبال راهکارهایی هستید که بتوانید مدیریت...",
      teacher: "شقایق ستیه نیا",
      date: "1402/11/11",
      image: articleImg3,
    },

    {
      id: 4,
      title: "آموزش Class در جاوا اسکریپت",
      desc: "کلاس در جاوا اسکریپت، مانند دستورالعملی برای ساختن اشیا است. در اصل کلاس به کامپیوتر یا مرورگر می‌گوید که هر شی باید چه ویژگی‌هایی داشته باشد و بتواند چه‌کاری انجام…",
      teacher: "کامل بهرامی",
      date: "1402/11/09",
      image: articleImg1,
    },
  ]);

  return (
    <div className="article-container">
      <Container>
      <div className="section-title">
            <h1>
              <FaSquare color="#ec4899" size={17} style={{ marginLeft: "15px" }} />
              آخرین مقالات
            </h1>
            <p>مقالات بروز برنامه نویسی</p>
          </div>
        <Row>
          {articles.map((article) => (
            <Col className="col" xs={12} sm={6} md={6} lg={3}>
              <div className="article-card">
                <div className="image-box">
                  <img src={article.image} alt="#" />
                </div>

                <div className="desc-box">
                  <h4>{article.title}</h4>
                  <p>{article.desc}</p>
                  <div className="date-box">
                    <span className="teacher-name">
                      <CiUser size={16} />
                      {article.teacher}
                    </span>
                    <span className="date">
                      <CiCalendar size={16} />
                      {article.date}
                    </span>
                  </div>

                  <div className="article-link">
                    <Link className="link-btn" to="/">
                      <span>مطالعه مقاله</span>
                      <BsArrowLeftCircleFill className="arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
