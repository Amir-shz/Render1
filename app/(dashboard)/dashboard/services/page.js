"use client";
import Pagination from "@/app/_components/Pagination";
import ProductCard from "@/app/_components/ProductCard";
import { PAGE_SIZE } from "@/app/_lib/utils";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Page() {
  const searchParams = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const productNum = Array.from({ length: 22 });
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE - 1;

  return (
    <div>
      <h2 className=" border-b border-slate-400/50 pb-4 text-2xl text-slate-700 font-semibold m-4 max-sm:m-0 max-sm:mt-1 ">
        سرویس ها
      </h2>
      <div className=" grid grid-cols-4 gap-y-4 gap-x-2 max-xl:grid-cols-3 max-lg:grid-cols-2 max-lg:px-8 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:px-0 max-sm:px-2 max-sm:mt-4">
        {/* <ProductCard />
        <ProductCard isAvailable />
        <ProductCard />
        <ProductCard isAvailable />
        <ProductCard />
        <ProductCard isAvailable />
        <ProductCard />
        <ProductCard isAvailable /> */}
        {productNum.map((val, index) =>
          index >= startIndex && index <= endIndex ? (
            <Suspense fallback="<p>loading</p>">
              <ProductCard key={Math.random()} />
            </Suspense>
          ) : null
        )}
      </div>
      <div className="flex justify-center my-4">
        <Pagination count={productNum.length} />
      </div>
    </div>
  );
}

export default Page;
