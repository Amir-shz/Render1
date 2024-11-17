import Image from "next/image";
import icon from "@/public/icon.png";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image src={icon} alt="Render1 Logo" />
    </Link>
  );
}

export default Logo;
