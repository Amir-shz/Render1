import Image from "next/image";
import LoginBtn from "@/app/_components/LoginBtn";
import Logo from "@/app/_components/Logo";
import Nav from "@/app/_components/Nav";

import headerPhoto from "@/public/headerPhoto.png";
import Menu from "./Menu";

function Header() {
  return (
    <>
      <header className="bg-slate-900 text-white font-medium flex justify-between items-center px-2">
        <Menu />
        <div className=" size-24 p-3">
          <Logo />
        </div>
        <Nav />
        <LoginBtn />
      </header>
      <Image
        src={headerPhoto}
        alt="static picture for header background"
        className="-z-50 fixed -top-64 opacity-15 max-2xl:-top-56 max-xl:-top-44 max-lg:-top-32 max-md:-top-24 max-sm:-top-14"
      />
    </>
  );
}

export default Header;
