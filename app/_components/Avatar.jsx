import Image from "next/image";

function Avatar({ img }) {
  return (
    <Image
      src={img}
      width={48}
      height={48}
      className="rounded-full"
      alt="user avatar"
    />
  );
}

export default Avatar;
