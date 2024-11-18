import Logo from "@/app/_components/Logo";
import FooterText from "@/app/_components/FooterText";
import ProsecutionText from "@/app/_components/ProsecutionText";
import FooterContacts from "@/app/_components/FooterContacts";

function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-3 gap-20 max-lg:gap-8 max-lg:grid-cols-[1fr_1fr_0.5fr] bg-slate-900 text-white p-4 pb-6 max-md:grid-cols-1 max-md:gap-4 max-sm:gap-2">
        <FooterText />
        <FooterContacts />
        <div className="size-40 self-center justify-self-center max-md:size-20 ">
          <Logo />
        </div>
      </div>
      <ProsecutionText />
    </footer>
  );
}

export default Footer;
