import SpecificationInput from "./SpecificationInput";

function Specifications() {
  const isComplete = true;

  return (
    <div className="bg-slate-100 rounded-sm p-4 shadow pb-2 max-sm:p-2">
      <div className="flex items-center gap-4">
        <h3 className=" text-lg font-medium">مشخصات</h3>
        {isComplete && (
          <p className=" text-xs bg-green-600 text-white px-2 py-1 rounded-full ">
            تایید شده
          </p>
        )}
      </div>
      <div className=" my-2 grid grid-cols-[1fr_5fr] items-center gap-2">
        <SpecificationInput
          label="نام"
          type="Text"
          id="name"
          placeholder="امیرحسین"
        />
        <SpecificationInput
          label="نام خانوادگی"
          type="Text"
          id="lastname"
          placeholder="شریف زاده"
        />
        <SpecificationInput
          label="کدملی"
          type="Text"
          id="nationalCode"
          placeholder="۱۱۸۰۰۹۵۷۳۱"
        />
        <SpecificationInput
          label="شماره همراه"
          type="Text"
          id="mobileNumber"
          placeholder="۰۹۱۳۴۵۹۲۹۶۲"
        />
        <SpecificationInput
          label="ایمیل"
          type="Text"
          id="email"
          placeholder="amirsharifzadeh.dev@gmail.com"
        />
      </div>
    </div>
  );
}

export default Specifications;
