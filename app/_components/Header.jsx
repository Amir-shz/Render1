import Image from "next/image";
import LoginBtn from "@/app/_components/LoginBtn";
import Logo from "@/app/_components/Logo";
import Nav from "@/app/_components/Nav";

import headerPhoto from "@/public/headerPhoto.png";

function Header() {
  return (
    <>
      <header className="bg-slate-900 text-white font-medium flex justify-between items-center px-2">
        <div className=" size-24 p-3">
          <Logo />
        </div>
        <Nav />
        <LoginBtn />
      </header>
      <Image
        src={headerPhoto}
        alt="static picture for header background"
        className="-z-50 fixed -top-72 opacity-15"
      />
    </>
  );
}

export default Header;
