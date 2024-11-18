import Image from "next/image";

function AboutRow({ photoSRC, alt, text, isReverse = false }) {
  return (
    <div className="grid grid-cols-2 items-center mx-8 max-md:grid-cols-1 max-md:[&_p]:first:pt-0 max-md:mx-4 max-sm:mx-2">
      <div className="self-stretch">
        <Image src={photoSRC} alt={alt} className=" object-cover h-full" />
      </div>
      <p
        className={`${
          isReverse ? "order-1 max-md:-order-1" : "-order-1"
        } text-justify text-lg leading-8 px-4 max-lg:leading-6 max-lg:text-base max-md:pb-4 max-md:pt-10 max-sm:pt-8 max-sm:pb-2 max-sm:font-medium max-sm:text-sm max-sm:leading-[26px] `}
      >
        {text}
      </p>
    </div>
  );
}

export default AboutRow;
