import React, { useEffect, useState } from "react";
import TextInput from "../atoms/TextInput";
import PasswordInput from "../atoms/PasswordInput";
import LoginButton from "../atoms/LoginButton";

function LoginCard({ EmailValidation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isEmailValid, setIsEmailValid] = useState();

  const handleChange = (event) => {
    const { id, value } = event.target;

    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleEmailValidation = (isValid) => {
    setIsEmailValid(isValid);
    EmailValidation(isValid);
    // console.log(isValid);
  };

  // useEffect(() => {
  //   console.log(isEmailValid);
  // }, [isEmailValid]);

  return (
    <div className="w-1/3 m-5 p-12 shadow-xl rounded-2xl bg-white">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-6">Masuk</h1>
        <span>
          Masukkan alamat email / nomor telepon dan kata sandi yang telah anda
          daftarkan.
        </span>
      </div>
      <div>
        <TextInput
          placeholder={"user@user.com"}
          id={"email"}
          onChange={handleChange}
        />
        <PasswordInput
          placeholder={"******"}
          id={"password"}
          onChange={handleChange}
        />
        <LoginButton
          text={"Masuk Sekarang"}
          email={email}
          password={password}
          EmailValidation={handleEmailValidation}
        />
      </div>
    </div>
  );
}

export default LoginCard;
