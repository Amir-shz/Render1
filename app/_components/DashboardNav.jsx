import Logo from "./Logo";
import MainNavBtn from "./MainNavBtn";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCircleStack,
  HiOutlineDocumentText,
  HiOutlineChatBubbleLeftEllipsis,
} from "react-icons/hi2";

function DashboardNav() {
  return (
    <nav className=" h-screen space-y-2 ">
      <div className="w-full flex flex-col justify-center items-center">
        <figure className=" size-32">
          <Logo />
        </figure>
        <p className=" text-white text-2xl font-bold mb-2">رندر1</p>
      </div>
      <MainNavBtn href="/dashboard" icon={<HiOutlineHome />}>
        خانه
      </MainNavBtn>
      <MainNavBtn href="/dashboard/profile" icon={<HiOutlineUser />}>
        حساب کاربری
      </MainNavBtn>
      <MainNavBtn href="/dashboard/services" icon={<HiOutlineCircleStack />}>
        سرویس ها
      </MainNavBtn>
      <MainNavBtn href="/dashboard/invoices" icon={<HiOutlineDocumentText />}>
        فاکتور ها
      </MainNavBtn>
      <MainNavBtn
        href="/dashboard/support"
        icon={<HiOutlineChatBubbleLeftEllipsis />}
      >
        پشتیبانی
      </MainNavBtn>
    </nav>
  );
}

export default DashboardNav;
