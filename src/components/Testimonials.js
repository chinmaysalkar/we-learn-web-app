import React, {useEffect} from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import testimonials1 from '../assets/Images/testimonials/testimonials-1.jpg' 
import testimonials2 from '../assets/Images/testimonials/testimonials-2.jpg' 
import testimonials3 from '../assets/Images/testimonials/testimonials-3.jpg' 
import testimonials4 from '../assets/Images/testimonials/testimonials-4.jpg' 
import testimonials5 from '../assets/Images/testimonials/testimonials-5.jpg' 

import 'aos/dist/aos.css'; 
import AOS from 'aos';

import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';



export default function Testimonials() {


  AOS.init();
      
  
  return (
    <>
     <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Testimonials</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="testimonials-slider swiper">
          <div className="swiper-wrapper">


          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2000 }}
            spaceBetween={50}
            slidesPerView={2}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 1, spaceBetween: 30 },
              768: { slidesPerView: 1, spaceBetween: 30 },
              962: { slidesPerView: 1, spaceBetween: 30 },
              1280: { slidesPerView: 2, spaceBetween: 30 }
            }}

        >
          <SwiperSlide><div className="swiper-slide">
              <div className="testimonial-item">
                <img src={testimonials1} className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo & Founder</h4>
                  <i class="bx bxs-quote-alt-left quote-icon-left"><BiSolidQuoteAltLeft/></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bx bxs-quote-alt-right quote-icon-right"><BiSolidQuoteAltRight/></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={testimonials2} className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo & Founder</h4>
                  <i class="bx bxs-quote-alt-left quote-icon-left"><BiSolidQuoteAltLeft/></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bx bxs-quote-alt-right quote-icon-right"><BiSolidQuoteAltRight/></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={testimonials3} className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo & Founder</h4>
                  <i class="bx bxs-quote-alt-left quote-icon-left"><BiSolidQuoteAltLeft/></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bx bxs-quote-alt-right quote-icon-right"><BiSolidQuoteAltRight/></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={testimonials4} className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo & Founder</h4>
                <i class="bx bxs-quote-alt-left quote-icon-left"><BiSolidQuoteAltLeft/></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bx bxs-quote-alt-right quote-icon-right"><BiSolidQuoteAltRight/></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={testimonials5} className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo & Founder</h4>
                  <i class="bx bxs-quote-alt-left quote-icon-left"><BiSolidQuoteAltLeft/></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bx bxs-quote-alt-right quote-icon-right"><BiSolidQuoteAltRight/></i>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>          
        </div>
        <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
    </>
  )
}
