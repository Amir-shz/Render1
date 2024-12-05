import DashboardHeader from "@/app/_components/DashboardHeader";
import DashboardNav from "@/app/_components/DashboardNav";

function Layout({ children }) {
  return (
    <div className=" w-screen h-dvh overflow-hidden grid grid-cols-12 grid-rows-12  bg-teal-50 ">
      <div className=" col-span-2 p-2 row-span-full bg-slate-700 max-lg:col-span-3 max-md:hidden">
        <DashboardNav />
      </div>
      <div className=" px-4 col-span-10 bg-slate-700 grid  max-lg:col-span-9 max-md:col-span-full">
        <DashboardHeader />
      </div>
      <div className="col-span-10 row-span-11 overflow-x-hidden  overflow-y-scroll no-scrollbar max-lg:col-span-9 max-md:col-span-full p-4 ">
        {children}
      </div>
    </div>
  );
}

export default Layout;
