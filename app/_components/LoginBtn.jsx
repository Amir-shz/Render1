import Link from "next/link";
import { HiUser } from "react-icons/hi2";

function LoginBtn() {
  return (
    <button className=" py-2 px-4 mx-4 hover:bg-primary hover:text-slate-900 duration-200 transition-all rounded-md">
      <Link className="flex items-center gap-1 size-full " href="/login">
        <span>ورود</span>
        <HiUser />
      </Link>
    </button>
  );
}

export default LoginBtn;
