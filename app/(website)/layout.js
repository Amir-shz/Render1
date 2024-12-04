import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className="px-4">{children}</main>
      <Footer />
    </>
  );
}
