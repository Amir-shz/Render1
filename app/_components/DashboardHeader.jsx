import { Avatar, Tooltip } from "@mui/material";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { handleSignOut } from "../_lib/actions";
import DashboardSideBar from "./DashboardSideBar";

function DashboardHeader() {
  return (
    <header className="flex items-center justify-between gap-2 [&_svg]:size-6 ">
      <div className=" flex items-center flex-row-reverse gap-2">
        <p className=" text-slate-200 max-sm:text-sm">امیرحسین شریف زاده</p>
        <Avatar
          className=" font-iranSans"
          sx={{
            width: 36,
            height: 36,
            fontSize: 20,
            fontWeight: "Bold",
            color: "black",
          }}
        >
          ا
        </Avatar>
        <DashboardSideBar />
      </div>
      <div className=" [&_button]:p-2 [&_button]:rounded-full ">
        <Tooltip arrow title="خروج">
          <button
            onClick={handleSignOut}
            className="hover:bg-slate-300 transition-all duration-200 bg-slate-200 [&>svg]:text-red-700"
          >
            <HiArrowRightOnRectangle />
          </button>
        </Tooltip>
      </div>
    </header>
  );
}

export default DashboardHeader;
