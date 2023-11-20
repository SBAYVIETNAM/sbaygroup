import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Nav from "./_components/navbar";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SBAY VIỆT NAM",
  description: "Kiến tạo sự nghiệp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" data-theme="light">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-4FYG8CZ5SC" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4FYG8CZ5SC');
        `}
      </Script>
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
