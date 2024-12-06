import { Button } from "@mui/material";
import SpecificationInput from "./SpecificationInput";
import { handleAdditionalSpec } from "../_lib/actions";

function AdditionalSpecifications() {
  const isComplete = true;

  return (
    <form
      action={handleAdditionalSpec}
      className="bg-slate-100 rounded-sm p-4 shadow pb-2 max-sm:p-2"
    >
      <div className="flex items-center gap-4">
        <h3 className=" text-lg font-medium">مشخصات تکمیلی</h3>
        {isComplete && (
          <p className=" text-xs bg-green-600 text-white px-2 py-1 rounded-full ">
            تایید شده
          </p>
        )}
      </div>
      <div className=" my-2 grid grid-cols-[1fr_5fr] items-center gap-2">
        <SpecificationInput label="شهر" type="Text" id="city" />
        <SpecificationInput label="کدشهر" type="number" id="phoneCode" />
        <SpecificationInput label="شماره تلفن" type="number" id="phoneNumber" />
        <SpecificationInput label="کدپستی" type="number" id="postalCode" />
        <SpecificationInput label="آدرس" type="Text" id="adress" />
        <Button
          fullWidth
          variant="contained"
          type="submit"
          className=" font-iranSans col-span-2 mt-2"
        >
          ثبت
        </Button>
      </div>
    </form>
  );
}

export default AdditionalSpecifications;
