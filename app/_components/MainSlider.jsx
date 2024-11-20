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
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          modules={[Autoplay, EffectFade]}
          className="h-full"
        >
          <SwiperSlide>
            <video
              src="slide3.mp4"
              // width="100px"
              // height="100px"
              autoPlay
              muted
              loop
              preload="none"
              className=" object-cover w-auto h-auto min-w-full min-h-full sepia-[0.05] brightness-[0.55] -z-10"
            ></video>

            <div className=" bg- absolute top-0 left-0 size-full z-30 flex-col">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max max-[450px]:-translate-x-32">
                <p className="text-primary font-semibold text-sm pb-4 max-md:text-sm max-[450px]:text-xs">
                  سرورهای بهینه‌سازی شده برای سرعت و دقت
                </p>
                <p className="text-7xl font-semibold max-lg:text-5xl max-md:text-3xl max-[450px]:text-2xl">
                  رندرهای بی‌نظیر با keyshot
                </p>
              </div>
              <p className=" text-primary font-bold text-5xl absolute bottom-4 left-5">
                01
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <MainSlide
              src={slide1}
              title="سرورهای قوی برای رندر های واقع گرایانه"
              text="تجسم شگفت انگیز با lumion"
              num="02"
            />
          </SwiperSlide>
          <SwiperSlide>
            <MainSlide
              src={slide2}
              title="سرورهای بهینه سازی شده برای رندرهای پیچیده"
              text="خلاقیت بی‌پایان با 3ds max"
              num="03"
            />
          </SwiperSlide>
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
