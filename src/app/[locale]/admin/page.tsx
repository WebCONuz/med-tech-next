import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Home page",
};

export default function AdminHome() {
  return (
    <div className="container py-4 bg-main-color text-white">
      Admin: Home Page
    </div>
  );
}
