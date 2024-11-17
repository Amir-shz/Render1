import Logo from "@/app/_components/Logo";
import FooterText from "@/app/_components/FooterText";
import ProsecutionText from "@/app/_components/ProsecutionText";
import FooterContacts from "@/app/_components/FooterContacts";

function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-3 gap-20 bg-slate-900 text-white p-4 pb-6">
        <FooterText />
        <FooterContacts />
        <div className="size-40 self-center justify-self-center ">
          <Logo />
        </div>
      </div>
      <ProsecutionText />
    </footer>
  );
}

export default Footer;
