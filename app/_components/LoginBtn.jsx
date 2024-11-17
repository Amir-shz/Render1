import { HiMiniUser } from "react-icons/hi2";

function LoginBtn() {
  return (
    <button className="flex items-center gap-1 py-2 px-4 mx-4 hover:bg-primary hover:text-slate-900 duration-200 transition-all rounded-md">
      <span>ورود</span>
      <HiMiniUser />
    </button>
  );
}

export default LoginBtn;
