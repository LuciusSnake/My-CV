import React from 'react'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


import './Testimonials.css'

const data = [
  {
    avatar: avatar1,
    name: 'Kek',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta quisquam voluptas voluptatibus, dignissimos facilis molestias labore at? Numquam, quam!'
  },
  {
    avatar: avatar2,
    name: 'Lol',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta quisquam voluptas voluptatibus, dignissimos facilis molestias labore at? Numquam, quam!'
  },
  {
    avatar: avatar3,
    name: 'Face',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta quisquam voluptas voluptatibus, dignissimos facilis molestias labore at? Numquam, quam!'
  },
  {
    avatar: avatar4,
    name: 'Palm',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta quisquam voluptas voluptatibus, dignissimos facilis molestias labore at? Numquam, quam!'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }} 
        className="container testimonials__container">

          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                  <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </section>
  )
}

export default React.memo(Testimonials)
