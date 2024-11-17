import Image from "next/image";

function AboutRow({ photoSRC, alt, text, isReverse = false }) {
  return (
    <div className="grid grid-cols-2 items-center  mx-8">
      <div>
        <Image src={photoSRC} alt={alt} />
      </div>
      <p
        className={`${
          isReverse ? "order-1" : "-order-1"
        } text-justify text-lg leading-8 px-4 `}
      >
        {text}
      </p>
    </div>
  );
}

export default AboutRow;
