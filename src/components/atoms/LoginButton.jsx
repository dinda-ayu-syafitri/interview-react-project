import React, { useEffect, useState } from "react";

function LoginButton({ text, password, email, EmailValidation }) {
  const [isEmailValid, setIsEmailValid] = useState();

  const handleLogin = () => {
    setIsEmailValid(email.includes("@") && email.includes("."));
    EmailValidation(isEmailValid);
    // console.log(password);
  };

  useEffect(() => {
    // console.log(isEmailValid);
  }, [isEmailValid]);

  return (
    <div>
      <button
        onClick={handleLogin}
        type="button"
        className="w-full text-white bg-[#F06623] hover:bg-[#dc5b1b] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {text}
      </button>
    </div>
  );
}

export default LoginButton;
