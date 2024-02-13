import React from 'react'
import './PishForoush.css'
import { FaSquare } from "react-icons/fa";
import { Container } from 'react-bootstrap'
import SwiperCarousel from '../Swiper';

export default function PishForoush() {
  return (
    <div className='pishforoush-container'>
      <Container className='container'>
      <div className="section-title">
          <h1>
            <FaSquare
              color="#2ed573"
              size={17}
              style={{ marginLeft: "15px" }}
            />
            در حال پیش فروش
          </h1>
          <p>دوره هایی که قراره برگزار بشن</p>
        </div>

        <SwiperCarousel></SwiperCarousel>
      </Container>
    </div>
  )
}
