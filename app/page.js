import AnimatedRender from "./_components/AnimatedRender";
import WhyRender1 from "./_components/WhyRender1";

export const metadata = {
  title: "render1",
  description: "",
};

export default function page() {
  return (
    <div className="">
      <WhyRender1 />
      <AnimatedRender />
    </div>
  );
}
