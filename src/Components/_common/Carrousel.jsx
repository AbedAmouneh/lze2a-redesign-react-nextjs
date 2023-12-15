import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useCallback, useRef } from "react";

export const Carrousel = (props) => {
  const swiper = useRef(null);

  const handlePrev = useCallback(() => {
    if (!swiper.current) return;
    swiper.current.swiper?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiper.current) return;
    swiper.current.swiper?.slideNext();
  }, []);

  return (
    <div className="relative">
      <div className="swiper-button-prev" onClick={handlePrev} />
      <Swiper
        ref={swiper}
        spaceBetween={props.spaceBetween ?? 50}
        slidesPerView={props.slidesPerView ?? 3}
        loop={true}
      >
        {props.children.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex my-auto items-center justify-center"
          >
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next" onClick={handleNext} />
    </div>
  );
};
