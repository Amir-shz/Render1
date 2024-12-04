import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi2";

function AuthForm({ children, action }) {
  return (
    <div className="flex bg-slate-800 w-screen h-dvh relative">
      <div className=" bg-slate-900  w-1/2 rounded-l-[36px] flex-1 size-full"></div>
      <div className="  flex  flex-1 size-full">
        <form
          action={action}
          className=" z-20 bg-slate-50 border border-slate-600/50 max-xl:w-1/2 max-md:w-2/3 max-sm:w-3/4  w-1/3 h-min absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl text-black flex flex-col gap-4 items-center justify-center px-8 max-sm:px-4 py-8 max-sm:py-6"
        >
          {children}
        </form>
      </div>
      <Link
        href="/"
        className=" absolute top-5 left-5 text-slate-100 bg-slate-600 p-2 rounded-full max-sm:top-3 max-sm:left-3"
      >
        <HiOutlineHome className=" size-10 max-sm:size-8" />
      </Link>
    </div>
  );
}

export default AuthForm;
