import PriceCard from "./PriceCard";

function PricePlan() {
  return (
    <div
      className=" transition-all duration-500 ease-in bg-slate-950 -mx-4 py-16 "
      id="pricePlan__container"
    >
      <div className=" mx-48 max-lg:mx-24 max-md:mx-12 max-sm:mx-6">
        <div className="pb-4 items-center text-primary font-bold text-xl flex justify-between">
          <p className=" ">سرورهای ویژه گرافیکی</p>
          <p className=" border-2 font-medium text-lg border-slate-600 py-2 px-4 rounded-lg bg-slate-950">
            روزانه
          </p>
        </div>
        <div className="text-white grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          <PriceCard
            cpu={24}
            gpu="RTX"
            disk="256SSD"
            ram={64}
            num="01"
            title="سرور گرافیکی پایه"
            price="۳۰۰,۰۰۰"
          />
          <PriceCard
            cpu={32}
            gpu="RTX"
            disk="256SSD"
            ram={64}
            num="02"
            title="سرور گرافیکی استاندارد"
            price="۴۰۰,۰۰۰"
          />
          <PriceCard
            cpu={64}
            gpu="RTX"
            disk="256SSD"
            ram={128}
            num="03"
            title="سرور گرافیکی پیشرفته"
            price="۵۰۰,۰۰۰"
          />
          <PriceCard
            cpu={128}
            gpu="RTX"
            disk="256SSD"
            ram={128}
            num="04"
            title="سرور گرافیکی حرفه‌ای"
            price="۶۰۰,۰۰۰"
          />
        </div>
      </div>
    </div>
  );
}

export default PricePlan;
