import React from 'react'
import { Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import gallery1 from '../assets/Images/gallery/gallery-1.png'
import gallery2 from '../assets/Images/gallery/gallery-2.png'
import gallery3 from '../assets/Images/gallery/gallery-3.png'
import gallery4 from '../assets/Images/gallery/gallery-4.png'
import gallery5 from '../assets/Images/gallery/gallery-5.png'
import gallery6 from '../assets/Images/gallery/gallery-6.png'
import gallery7 from '../assets/Images/gallery/gallery-7.png'
import gallery8 from '../assets/Images/gallery/gallery-8.png'
import gallery9 from '../assets/Images/gallery/gallery-9.png'
import gallery10 from '../assets/Images/gallery/gallery-10.png'
import gallery11 from '../assets/Images/gallery/gallery-11.png'
import gallery12 from '../assets/Images/gallery/gallery-12.png'

import 'aos/dist/aos.css'; 
import AOS from 'aos';


export default function Gallery() {

  AOS.init();

     
  return (
   <>
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <div className="section-title mt-3">
          <h2>Gallery</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
      </div>

      <div className="container-fluid" data-aos="fade-up">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000 }}
          spaceBetween={50}
          slidesPerView={7}
          centeredSlides={true} 
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            962: { slidesPerView: 4, spaceBetween: 30 },
            1280: { slidesPerView: 7, spaceBetween: 30 }
          }}
        >
          <SwiperSlide><a href="assets/Images/gallery/gallery-1.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src={gallery1} className="img-fluid" alt="GalleryImage 1" /></a></SwiperSlide>
          <SwiperSlide><a href="assets/Images/gallery/gallery-2.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src={gallery2} className="img-fluid" alt="GalleryImage 2" /></a></SwiperSlide>
          <SwiperSlide><a href="assets/Images/gallery/gallery-3.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src={gallery3} className="img-fluid" alt="GalleryImage 3" /></a></SwiperSlide>
          <SwiperSlide><a href="assets/Images/gallery/gallery-4.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src={gallery4} className="img-fluid" alt="GalleryImage 4" /></a></SwiperSlide>
          <SwiperSlide><a href="assets/Images/gallery/gallery-5.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src={gallery5} className="img-fluid" alt="GalleryImage 5" /></a></SwiperSlide>
          <SwiperSlide><a href="assets/Images/gallery/gallery-6.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src={gallery6} className="img-fluid" alt="GalleryImage 6" /></a></SwiperSlide>
          <SwiperSlide><a href="assets/Images/gallery/gallery-7.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src={gallery7} className="img-fluid" alt="GalleryImage 7" /></a></SwiperSlide>
          <SwiperSlide><a href="assets/Images/gallery/gallery-8.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src={gallery8} className="img-fluid" alt="GalleryImage 8" /></a></SwiperSlide>
          <SwiperSlide><a href="assets/Images/gallery/gallery-9.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src={gallery9} className="img-fluid" alt="GalleryImage 9" /></a></SwiperSlide>
          <SwiperSlide><a href="assets/Images/gallery/gallery-10.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src={gallery10} className="img-fluid" alt="GalleryImage 10" /></a></SwiperSlide>
          <SwiperSlide><a href="assets/Images/gallery/gallery-11.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src={gallery11} className="img-fluid" alt="GalleryImage 11" /></a></SwiperSlide>
          <SwiperSlide><a href="assets/Images/gallery/gallery-12.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src={gallery12} className="img-fluid" alt="GalleryImage 12" /></a></SwiperSlide>
        </Swiper>
      </div>
    </section>
   </>
  )
}
