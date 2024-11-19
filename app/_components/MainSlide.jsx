"use client";
import Image from "next/image";

function MainSlide({ src, title, text, num }) {
  return (
    <>
      <Image
        src={src}
        alt=""
        fill
        className=" object-cover sepia-[0.05] brightness-[0.55] animate-scaleZoom"
      />
      <div className=" relative z-20 flex-col size-full">
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max max-[450px]:-translate-x-32">
          <p className=" text-primary font-semibold text-sm pb-4 max-md:text-sm max-[450px]:text-xs">
            {title}
          </p>
          <p className=" text-7xl font-semibold max-lg:text-5xl max-md:text-3xl max-[450px]:text-2xl">
            {text}
          </p>
        </div>
        <p className=" text-primary font-bold text-5xl absolute bottom-4 left-5">
          {num}
        </p>
      </div>
    </>
  );
}

export default MainSlide;
