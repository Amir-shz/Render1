import AnimatedRender from "./_components/AnimatedRender";
import GpuSlider from "./_components/GpuSlider";
import MainSlider from "./_components/MainSlider";
import PricePlan from "./_components/PricePlan";
import WhyRender1 from "./_components/WhyRender1";

export const metadata = {
  title: "render1",
  description: "",
};

export default function page() {
  return (
    <div>
      <MainSlider />
      <WhyRender1 />
      <PricePlan />
      <GpuSlider />
      <AnimatedRender />
    </div>
  );
}
