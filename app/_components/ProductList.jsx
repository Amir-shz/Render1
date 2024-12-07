import { useSearchParams } from "next/navigation";
import { PAGE_SIZE } from "../_lib/utils";
import ProductCard from "./ProductCard";

function ProductList({ productNum }) {
  const searchParams = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE - 1;
  return (
    <>
      {productNum.map((val, index) =>
        index >= startIndex && index <= endIndex ? (
          <ProductCard key={Math.random()} />
        ) : null
      )}
    </>
  );
}

export default ProductList;
