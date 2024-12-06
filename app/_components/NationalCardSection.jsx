"use client";

import { Button } from "@mui/material";
import { handleNationalCard } from "../_lib/actions";
import { useState } from "react";
import Image from "next/image";

function NationalCardSection() {
  const [file, setFile] = useState("");
  const isComplete = true;

  return (
    <form
      action={handleNationalCard}
      onSubmit={() => setFile("")}
      className="bg-slate-100 rounded-sm p-4 shadow pb-2 col-span-2 max-lg:col-span-1"
    >
      <div className="flex items-center gap-4">
        <h3 className=" text-lg font-medium">کارت ملی</h3>
        {isComplete && (
          <p className=" text-xs bg-green-600 text-white px-2 py-1 rounded-full ">
            تایید شده
          </p>
        )}
      </div>
      <div className=" my-2 grid grid-cols-2 gap-4 items-center max-sm:grid-cols-1">
        <div>
          <label
            htmlFor="nationalCardImg"
            className=" cursor-pointer bg-slate-300 px-4 py-2 my-2 block text-center hover:bg-slate-200 transition-all duration-300 border mx-auto border-slate-400 rounded-sm w-1/2 max-lg:w-2/3"
          >
            {file[0] ? file[0]?.name : "آپلود عکس کارت ملی"}
          </label>
          <input
            id="nationalCardImg"
            name="nationalCardImg"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => setFile(e.target.files)}
            className="hidden"
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            className=" font-iranSans col-span-2 mt-2"
          >
            ثبت
          </Button>
        </div>
        <div className=" size-full rounded bg-slate-200 flex justify-center items-center">
          {file[0] && (
            <Image
              src={URL?.createObjectURL(file[0])}
              alt="nationalCard"
              width={100}
              height={100}
              className=" object-contain size-full"
            />
          )}
          {!file[0] && (
            <p className=" text-center text-red-700 font-semibold max-sm:py-2">
              هنوز عکسی بارگذاری نشده
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

export default NationalCardSection;
