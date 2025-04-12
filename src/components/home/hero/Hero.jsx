import React from "react";
import Heading from "../../common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./hero.css";

import Images1 from "../../../assets/Images/Img1.jpg";
import Images2 from "../../../assets/Images/img2.jpg";
import Images3 from "../../../assets/Images/img3.jpg";
import Images4 from "../../../assets/Images/img4.jpg";
import Images5 from "../../../assets/Images/img5.jpg";
import Images6 from "../../../assets/Images/img6.jpg";
import brochure from "../../../assets/Images/KRISHNA HERITAGE BROCHURE FINAL.pdf";

const images = [Images1, Images2, Images3, Images4, Images5, Images6];

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Image Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop
        className="hero-slider"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide">
              <img src={img} alt={`Slide ${index + 1}`} className="hero-img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Over the Slider */}
      <div className="hero-content">
        <Heading
          title="Search Your Next Home"
          subtitle="Find new & featured property located in your local city."
        />
        <a href={brochure} className="hero-btn" download>
          Download Brochure
        </a>
      </div>
    </section>
  );
};

export default Hero;
