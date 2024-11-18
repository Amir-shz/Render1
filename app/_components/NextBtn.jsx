"use client";

import { HiChevronRight } from "react-icons/hi2";
import { useSwiper } from "swiper/react";

function NextBtn() {
  const swiper = useSwiper();

  return (
    <button
      className="z-50 absolute bottom-0 left-1/2 hover:bg-primary transition-all duration-200 flex items-center justify-center bg-slate-700 size-16"
      onClick={() => swiper.slideNext()}
    >
      <HiChevronRight size={24} />
    </button>
  );
}

export default NextBtn;
