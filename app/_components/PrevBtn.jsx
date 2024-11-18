"use client";

import { HiChevronLeft } from "react-icons/hi2";
import { useSwiper } from "swiper/react";

function PrevBtn() {
  const swiper = useSwiper();

  return (
    <button
      className=" z-50 absolute bottom-0 right-1/2 hover:bg-primary transition-all duration-200 flex items-center justify-center bg-slate-700 size-16"
      onClick={() => swiper.slidePrev()}
    >
      <HiChevronLeft size={24} />
    </button>
  );
}

export default PrevBtn;
