
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ACTION C Production",
  description: "Creative production and visual storytelling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <Header />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
