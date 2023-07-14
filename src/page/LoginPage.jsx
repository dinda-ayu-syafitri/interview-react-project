import React, { useState } from "react";
import LoginCard from "../components/molecules/LoginCard";
import BgImage from "../components/atoms/BgImage";
import ErrorToast from "../components/atoms/ErrorToast";

function LoginPage() {
  const [isEmailValid, setIsEmailValid] = useState();

  const handleEmailValidation = (isValid) => {
    setIsEmailValid(isValid);
    console.log(isValid);
  };

  return (
    <div className="relative w-full">
      <BgImage />
      {!isEmailValid && (
        <div className="flex justify-end w-full absolute my-10 pr-10">
          <ErrorToast />
        </div>
      )}
      <div className="flex items-center justify-center h-screen">
        <LoginCard EmailValidation={handleEmailValidation} />
      </div>
    </div>
  );
}

export default LoginPage;
