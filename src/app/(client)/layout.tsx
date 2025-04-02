import type { Metadata } from "next";
import Header from "@/components/client/header";
import Footer from "@/components/client/footer";

export const metadata: Metadata = {
  title: "Med Technique",
  description: "User Layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
