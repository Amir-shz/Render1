"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

import gpu1 from "@/public/gpu1.png";
import gpu2 from "@/public/gpu2.png";
import gpu3 from "@/public/gpu3.png";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";

function GpuSlider() {
  return (
    <div className=" text-white bg-[#05151b] -mx-4 py-16 max-sm:py-8">
      <div className=" grid grid-cols-2 gap-24 px-48 relative max-xl:gap-12 max-lg:px-24 max-lg:gap-4 max-md:px-12 max-sm:grid-cols-1 max-sm:px-6">
        <div className=" self-center size-full max-sm:pb-4">
          <Swiper loop={true}>
            <SwiperSlide>
              <div className=" relative hover:[&>div]:opacity-100">
                <div className="transition-opacity duration-300 opacity-0 text-primary absolute top-0 left-0 size-full bg-slate-950/70">
                  <p className=" text-center pt-4">RTX4090</p>
                  <div className="text-center mt-48 max-xl:mt-24 font-medium text-lg">
                    <p>حافظه: ۲۴ گیگابایت GDDR6X</p>
                    <p>پردازنده: ۵ نانومتری ۱۶۳۸۴ هسته کودا</p>
                  </div>
                </div>
                <Image src={gpu1} alt="gpu" className=" h-4/5 " />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative hover:[&>div]:opacity-100">
                <div className="transition-opacity duration-300 opacity-0 text-primary absolute top-0 left-0 size-full bg-slate-950/70">
                  <p className=" text-center pt-4">RTX4060</p>
                  <div className="text-center mt-48 max-xl:mt-24 font-medium text-lg">
                    <p>حافظه: ۸ گیگابایت GDDR6</p>
                    <p>پردازنده: ۵ نانومتری ۳۰۷۲ هسته کودا</p>
                  </div>
                </div>
                <Image src={gpu2} alt="gpu" className=" h-4/5" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative hover:[&>div]:opacity-100">
                <div className="transition-opacity duration-300 opacity-0 text-primary absolute top-0 left-0 size-full bg-slate-950/70">
                  <p className=" text-center pt-4">RTX3090</p>
                  <div className="text-center mt-48 max-xl:mt-24 font-medium text-lg">
                    <p>حافظه: ۲۴ گیگابایت GDDR6X</p>
                    <p>پردازنده: ۸ نانومتری ۱۰۴۹۶ هسته کودا</p>
                  </div>
                </div>
                <Image src={gpu3} alt="gpu" className=" h-4/5" />
              </div>
            </SwiperSlide>
            <NextBtn />
            <PrevBtn />
          </Swiper>
        </div>
        <div className=" self-center z-10 mr-8 max-sm:mr-0">
          <p className=" font-medium pb-4 text-primary">
            بهترین GPU ها برای نیاز های گرافیکی
          </p>
          <p className=" font-semibold text-5xl leading-relaxed text-white max-xl:text-2xl max-xl:pb-4">
            قدرتمندترین پردازنده‌های گرافیکی
          </p>
          <p className=" text-slate-400 leading-7 max-xl:text-justify max-lg:leading-6">
            ما پردازنده گرافیکی برتری را ارائه می‌دهیم که نیاز های مختلف شما را
            برآورده می‌کنند. این GPUها برای پردازش های سنگین، کارایی فوق العاده
            و پروژه های عظیم و پیچیده طراحی شده اند، و عملکرد بی نظیری در رندر،
            طراحی و پردازش گرافیکی ارائه می‌دهند.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GpuSlider;
