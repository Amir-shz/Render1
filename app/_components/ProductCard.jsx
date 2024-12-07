import Image from "next/image";
import Server1 from "@/public/server1.jpg";

import { Button } from "@mui/material";

function ProductCard({ isAvailable = false }) {
  return (
    <div className="shadow-md bg-slate-300 rounded-t-xl rounded-b-md overflow-hidden">
      <figure className="w-full h-48 overflow-hidden relative">
        <Image src={Server1} alt="server" className=" object-fill size-full" />
        <p
          className={`${
            isAvailable ? "bg-green-600" : "bg-red-500"
          } absolute bottom-2 left-2  text-white font-iranSans cursor-default px-2 py-1 text-sm rounded-full`}
        >
          {`${isAvailable ? "موجود" : "ناموجود"}`}
        </p>
      </figure>
      <div className="p-3 ">
        <p className=" font-bold text-lg">سرور گرافیکی RTX 3060-12</p>
        <div className="[&>div]:flex [&>div]:gap-2 [&>div]:items-center [&>div>p]:text-sm [&>div>p]:font-medium mt-4 space-y-2  ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-cpu-fill size-6 text-slate-700"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
              <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5" />
            </svg>
            <p>1x AMD 12core</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-gpu-card size-6 text-slate-700"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
              <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5m5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0" />
              <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5" />
            </svg>
            <p>1x RTX3060</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-device-hdd-fill size-6 text-slate-700"
              viewBox="0 0 16 16"
            >
              <path d="M8.785 9.896A3.001 3.001 0 0 0 8 4a3 3 0 0 0-.891 5.865c.667-.44 1.396-.91 1.955-1.268.224-.144.483.115.34.34zM9 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm9 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-9.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M4 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2.882 11.177a1.102 1.102 0 0 1-1.56-1.559c.1-.098.396-.314.795-.588a4 4 0 1 1 1.946.47c-.537.813-1.02 1.515-1.181 1.677" />
            </svg>
            <p>256GB SSD</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-device-ssd-fill size-6 text-slate-700"
              viewBox="0 0 16 16"
            >
              <path d="M5 8V4h6v4z" />
              <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m9 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M3.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m9.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4.75 3h6.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-6.5A.75.75 0 0 1 4 8.25v-4.5A.75.75 0 0 1 4.75 3M5 12h6a1 1 0 0 1 1 1v2h-1v-2h-.75v2h-1v-2H8.5v2h-1v-2h-.75v2h-1v-2H5v2H4v-2a1 1 0 0 1 1-1" />
            </svg>
            <p>64GB Ram</p>
          </div>
        </div>
      </div>
      <div className="px-3 flex justify-between items-center">
        <p className="font-semibold text-base text-green-800">
          قیمت <span className="text-xs">(روزانه)</span>: ۲۷۰,۰۰۰ تومان
        </p>
        <p
          className={`text-sm font-bold ${
            isAvailable ? "text-green-500" : "text-red-500"
          }`}
        >
          {isAvailable ? "موجودی: ۲" : "ناموجود"}
        </p>
      </div>
      <div className="w-full px-10 py-4">
        <Button
          disabled={!isAvailable}
          fullWidth
          variant="contained"
          type="submit"
          className=" font-iranSans"
        >
          سفارش
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
