import { Button } from "flowbite-react";
import React from "react";
import TextInput from "../atoms/TextInput";
import PasswordInput from "../atoms/PasswordInput";
import LoginButton from "../atoms/LoginButton";

function LoginCard() {
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
        <TextInput placeholder={"user@user.com"} id={"emailUser"} />
        <PasswordInput placeholder={"******"} id={"password"} />
        <LoginButton text={"Masuk Sekarang"} />
      </div>
    </div>
  );
}

export default LoginCard;
