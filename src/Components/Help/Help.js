import React, { useState } from "react";
import "./Help.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaSquare } from "react-icons/fa";

export default function Help() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "دوره های اختصاصی",
      desc: "با پشتیبانی و کیفیت بالا ارائه میده. چون خوش نام بودن نام برند و منافع مشتری و حفظ شان دیگر همکارانش براش مهمه",
      color1: "#14a7ea",
      color2: "#fff",
      degree: 160,
    },
    {
      id: 2,
      title: "اجازه تدریس",
      desc: "به هر مدرسی رو نمیده و فقط فقط با مدرسای سینیور و مید لول وارد همکاری میشه چون کیفیت براش مهمه",
      color1: "#33d676",
      color2: "#fff",
      degree: 340,
    },
    {
      id: 3,
      title: "دوره پولی یا رایگان",
      desc: "براش مهم نیست. به مدرسینش بهترین مزایا و دستمزد رو میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده",
      color1: "#ebb50e",
      color2: "#fff",
      degree: 200,
    },
    {
      id: 4,
      title: "اولویت بندی به ترتیب منافع",
      desc: "در سبزلرن اولویت اول با مدرس هست چون اون قراره دل بسوزونه. اولویت دوم با کاربره چون باید کمکش کرد و درنهایت اولویت آخر با سبزلرنه",
      color1: "#ec4c9b",
      color2: "#fff",
      degree: 45,
    },
  ]);

  return (
    <div className="help-container">
      <Container>
        <div className="section-title">
          <h1>
            <FaSquare
              color="#14a7ea"
              size={17}
              style={{ marginLeft: "15px" }}
            />
            ما چه کمکی بهتون میکنیم؟
          </h1>
          <p>از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست</p>
        </div>
        <Row className="row">
          {items.map((item) => (
            <Col key={item.id} className="col" xs={12} md={6}>
              <div className="circle-box">
                <div
                  className="circle"
                  style={{
                    background: `conic-gradient(from ${item.degree}deg, ${item.color1}, ${item.color2})`,
                  }}
                ></div>
              </div>

              <div className="help-info">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
