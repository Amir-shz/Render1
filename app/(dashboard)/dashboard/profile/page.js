import AdditionalSpecifications from "@/app/_components/AdditionalSpecifications";
import NationalCardSection from "@/app/_components/NationalCardSection";
import ProfileWarning from "@/app/_components/ProfileWarning";
import Specifications from "@/app/_components/Specifications";

function Page() {
  return (
    <div>
      <h2 className=" border-b border-slate-400/50 pb-4 text-2xl text-slate-700 font-semibold m-4 max-sm:m-0 max-sm:mt-1 ">
        حساب کاربری
      </h2>
      <ProfileWarning />
      <div className="bg-slate-200 mx-4 rounded shadow-md shadow-slate-500/25 p-3 grid grid-cols-2 gap-2 max-lg:p-2 max-lg:gap-2 max-lg:grid-cols-1 max-sm:mx-0 ">
        <Specifications />
        <AdditionalSpecifications />
        <NationalCardSection />
      </div>
    </div>
  );
}

export default Page;
