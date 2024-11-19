"use client";

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import MainSlide from "./MainSlide";

import slide1 from "@/public/slide1.jpg";
import slide2 from "@/public/slide2.jpg";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";

import "swiper/css/effect-fade";

function MainSlider() {
  return (
    <>
      <div className=" relative -mx-4 text-white h-[calc(100dvh-96px)]">
        <Swiper
          effect="fade"
          allowTouchMove={false}
          speed={1500}
          slidesPerView={1}
          spaceBetween={0}
          parallax={true}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Autoplay, EffectFade]}
          className="h-full"
        >
          <SwiperSlide>
            <MainSlide
              src={slide1}
              title="سرورهای قوی برای رندر های واقع گرایانه"
              text="تجسم شگفت انگیز با lumion"
              num="01"
            />
          </SwiperSlide>
          <SwiperSlide>
            <MainSlide
              src={slide2}
              title="سرورهای بهینه سازی شده برای رندرهای پیچیده"
              text="خلاقیت بی‌پایان با 3ds max"
              num="02"
            />
          </SwiperSlide>
          {/* <SwiperSlide className=" sepia-[0.05] brightness-[0.55]">
          3000
          </SwiperSlide> */}
          <div className=" absolute bottom-0 right-16">
            <NextBtn />
            <PrevBtn />
          </div>
        </Swiper>
        <p className=" absolute top-2/3 -translate-y-16 -left-36 text-primary font-medium text-sm z-40 -rotate-90 ">
          اسکرول کنید
          <span className="border-b border-primary inline-block w-72 mr-4 h-0"></span>
        </p>
      </div>
    </>
  );
}

export default MainSlider;
