import { Toast } from "flowbite-react";
import React from "react";

function ErrorToast() {
  return (
    <Toast className="bg-[#EB2811] ">
      <div className="ml-3 text-sm text-white font-normal">
        Email atau kata sandimu salah!
      </div>
      <Toast.Toggle />
    </Toast>
  );
}

export default ErrorToast;
