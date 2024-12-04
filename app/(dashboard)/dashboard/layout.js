import DashboardHeader from "@/app/_components/DashboardHeader";
import DashboardNav from "@/app/_components/DashboardNav";

function Layout({ children }) {
  return (
    <div className=" w-screen h-dvh overflow-hidden grid grid-cols-12 grid-rows-12  bg-teal-50 ">
      <div className=" col-span-2 p-2 row-span-full bg-slate-700">
        <DashboardNav />
      </div>
      <div className=" px-4 col-span-10 bg-slate-700 grid ">
        <DashboardHeader />
      </div>
      <div className="col-span-10 row-span-11 overflow-y-scroll overflow-x-hidden no-scrollbar ">
        {children}
      </div>
    </div>
  );
}

export default Layout;
