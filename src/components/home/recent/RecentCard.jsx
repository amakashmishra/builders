import React from "react"
import { list } from "../../data/Data"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const RecentCard = () => {
  return (
    <>
      <div className='recent content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, cover1, cover2, cover3, cover4, location, name } = val

          // Gather only the available images into an array
          const images = [cover, cover1, cover2, cover3, cover4].filter(Boolean)

          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={images.length > 1} // Only loop if there's more than 1 image
                  spaceBetween={10}
                >
                  {images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} alt={`cover${i + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className='text'>
                <h4>{name}</h4>
                <p>
                  {location}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
