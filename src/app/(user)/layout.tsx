import type { Metadata } from "next";

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
      <h1>User Lasayout</h1>
      {children}
    </div>
  );
}
