import localFont from "next/font/local";
import "@/app/styles/globals.css";

const iranSans = localFont({
  src: [
    {
      path: "./fonts/IRANSansX-Thin.woff2",
      weight: "100",
    },
    {
      path: "./fonts/IRANSansX-UltraLight.woff2",
      weight: "200",
    },
    {
      path: "./fonts/IRANSansX-Light.woff2",
      weight: "300",
    },
    {
      path: "./fonts/IRANSansX-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/IRANSansX-Medium.woff2",
      weight: "500",
    },
    {
      path: "./fonts/IRANSansX-DemiBold.woff2",
      weight: "600",
    },
    {
      path: "./fonts/IRANSansX-Bold.woff2",
      weight: "700",
    },
    {
      path: "./fonts/IRANSansX-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "./fonts/IRANSansX-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-IranSans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${iranSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
