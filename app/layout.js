import localFont from "next/font/local";
import "@/app/_styles/globals.css";
import "animate.css";

const iranSans = localFont({
  src: [
    {
      path: "./_fonts/IRANSansX-Thin.woff2",
      weight: "100",
    },
    {
      path: "./_fonts/IRANSansX-UltraLight.woff2",
      weight: "200",
    },
    {
      path: "./_fonts/IRANSansX-Light.woff2",
      weight: "300",
    },
    {
      path: "./_fonts/IRANSansX-Regular.woff2",
      weight: "400",
    },
    {
      path: "./_fonts/IRANSansX-Medium.woff2",
      weight: "500",
    },
    {
      path: "./_fonts/IRANSansX-DemiBold.woff2",
      weight: "600",
    },
    {
      path: "./_fonts/IRANSansX-Bold.woff2",
      weight: "700",
    },
    {
      path: "./_fonts/IRANSansX-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "./_fonts/IRANSansX-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-IranSans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${iranSans.variable} antialiased font-iranSans overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
