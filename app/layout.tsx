import "./globals.css";
import Navbar from "@/components/header/page";
import Footer from "@/components/footer/page";

export const metadata = {
  title: "Hacker News",
  description: "A simple Next.js application with a sticky navbar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <footer><Footer /></footer>
      </body>
    </html>
  );
}
