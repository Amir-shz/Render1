import ProductCard from "@/app/_components/ProductCard";

function Page() {
  return (
    <div>
      <h2 className=" border-b border-slate-400/50 pb-4 text-2xl text-slate-700 font-semibold m-4 max-sm:m-0 max-sm:mt-1 ">
        سرویس ها
      </h2>
      <div className=" grid grid-cols-3 gap-4 max-xl:grid-cols-2 max-lg:grid-cols-1 max-lg:px-8 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:px-0 max-sm:px-2">
        <ProductCard />
        <ProductCard isAvailable />
        <ProductCard />
        <ProductCard isAvailable />
        <ProductCard />
        <ProductCard isAvailable />
        <ProductCard />
        <ProductCard isAvailable />
      </div>
    </div>
  );
}

export default Page;
