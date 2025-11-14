import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import slideimg1 from "../assets/home/slide1.jpg";
import slideimg2 from "../assets/home/slide2.jpg";
import slideimg3 from "../assets/home/slide3.jpg";
import slideimg4 from "../assets/home/slide4.jpg";
import slideimg5 from "../assets/home/slide5.jpg";
const CategoryCurosel = () => {
  return (
    <div className="my-10 flex justify-center">
      <div className="w-[90%] max-w-6xl">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500, // 2.5 seconds
            disableOnInteraction: false, // user click korleo autoplay bondho hobe na
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src={slideimg1}
                alt="Salad"
                className="rounded-xl h-[200px] lg:h-[350px] w-full object-cover"
              />
              <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-base md:text-xl font-semibold bg-black/50 px-1 lg:px-4 py-0 lg:py-1 rounded-lg">
                SALAD
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src={slideimg2}
                alt="Soup"
                className="rounded-xl h-[200px] lg:h-[350px] w-full object-cover"
              />
              <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-base md:text-xl font-semibold bg-black/50 px-1 lg:px-4 py-0 lg:py-1 rounded-lg">
                SOUP
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src={slideimg3}
                alt="Dessert"
                className="rounded-xl h-[200px] lg:h-[350px] w-full object-cover"
              />
              <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-base md:text-xl font-semibold bg-black/50 px-1 lg:px-4 py-0 lg:py-1 rounded-lg">
                DESSERT
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src={slideimg4}
                alt="Pizza"
                className="rounded-xl h-[200px] lg:h-[350px] w-full object-cover"
              />
              <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-base md:text-xl font-semibold bg-black/50 px-1 lg:px-4 py-0 lg:py-1 rounded-lg">
                PIZZA
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src={slideimg5}
                alt="Drink"
                className="rounded-xl h-[200px] lg:h-[350px] w-full object-cover"
              />
              <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-base md:text-xl font-semibold bg-black/50 px-1 lg:px-4 py-0 lg:py-1 rounded-lg">
                DRINK
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryCurosel;
