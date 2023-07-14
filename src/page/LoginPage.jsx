import React from "react";
import LoginCard from "../components/molecules/LoginCard";
import BgImage from "../components/atoms/BgImage";

function LoginPage() {
  return (
    <div className="relative w-full">
      <BgImage />
      <div className="flex items-center justify-center h-screen">
        <LoginCard />
      </div>
    </div>
  );
}

export default LoginPage;
