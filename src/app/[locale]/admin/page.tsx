import React from "react";
import Title from "@/app/[locale]/components/ui/title";
import AuthForm from "@/app/[locale]/components/admin/auth-form";

const AuthLogin = () => {
  return (
    <main>
      <div className="container h-screen flex items-center justify-center">
        <div className="w-2/5 p-5 rounded-md border border-gray-200 shadow-lg">
          <Title title="Login" />
          <AuthForm />
        </div>
      </div>
    </main>
  );
};

export default AuthLogin;
