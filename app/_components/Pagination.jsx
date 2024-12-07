"use client";

import { Pagination as MuiPagination } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PAGE_SIZE } from "../_lib/utils";

function Pagination({ count }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pages = Math.ceil(count / PAGE_SIZE);

  function handleChange(page) {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <MuiPagination
      count={pages}
      page={currentPage}
      onChange={(e, page) => handleChange(page)}
      dir="ltr"
      className="bg-slate-200 py-2 px-4 rounded"
    />
  );
}

export default Pagination;
