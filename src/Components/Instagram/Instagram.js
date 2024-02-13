import React from 'react'
import './Instagram.css'
import { Container } from 'react-bootstrap'
import { FiChevronLeft } from "react-icons/fi";

export default function instagram() {
  return (
    <div className='instagram-container'>
      <Container>
        <div className="instagram">
          <div className="right-side">
            <h1>پیج اینستاگرام آکادمی سبزلرن</h1>
            <p>اطلاع رسانی تخفیف ها، آموزش های رایگان و نکات کاربردی و لایو های هفتگی</p>
          </div>

          <div className="left-side">
            <a href="https://www.instagram.com/sabzlearn_/" target="_blank">دیدن پست ها<FiChevronLeft /></a>
          </div>
        </div>
      </Container>
    </div>
  )
}
