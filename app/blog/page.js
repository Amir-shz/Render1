import BlogCard from "../_components/BlogCard";
import { data } from "@/app/_data/blogData";

export const metadata = {
  title: "پایگاه دانش",
};

export default function page() {
  return (
    <>
      <h2 className=" text-3xl pt-16 font-bold border-b pb-4 border-black ">
        پایگاه دانش
      </h2>
      <div className=" py-10 grid grid-cols-2 gap-4 mx-2">
        {data.map((blogData) => (
          <BlogCard key={blogData.id} blogData={blogData} />
        ))}
      </div>
    </>
  );
}
