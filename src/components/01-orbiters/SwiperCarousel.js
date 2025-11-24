// src/components/01-orbiters/SwiperCarousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './SwiperCarousel.css'; // Optional: For custom styles

const SwiperCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 5000 }}
    >
      <SwiperSlide>
        <img
          src="/img/orbiters/07_ip-card.jpg"
          alt="IP Card I"
          style={{ maxWidth: '800px', width: '100%', height: 'auto' }}
        />
        <div className="text-content">
          <h2>I</h2>
          <p>
            Explore music like never before, allowing you to layer sounds with controls that vary according to the
            cards you play, creating rich and original sound experiences.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/img/orbiters/10_ip-transit.png"
          alt="IP Transit II"
          style={{ maxWidth: '800px', width: '100%', height: 'auto' }}
        />
        <div className="text-content">
          <h2>II</h2>
          <p>
            Intuitively remix music, making sound creation accessible and fun for everyone, from professional musicians to
            those with no prior experience.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/img/orbiters/08_ip-max-24.jpg"
          alt="IP Max III"
          style={{ maxWidth: '800px', width: '100%', height: 'auto' }}
        />
        <div className="text-content">
          <h2>III</h2>
          <p>
            We are in the very beginning of this journey, <a href="https://plantasia.space/subscribe" target="_blank" rel="noopener noreferrer">stay connected</a> for more.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCarousel;