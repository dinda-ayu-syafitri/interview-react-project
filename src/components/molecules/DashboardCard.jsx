import React from "react";
import LogOutButton from "../atoms/LogOutButton";

function DashboardCard() {
  return (
    <div className="w-1/3 m-5 p-12 shadow-xl rounded-2xl bg-white">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <span>Selamat Datang, user@user.com</span>
      </div>
      <div className="mb-6">Daftar Makanan :</div>
      <div>
        <LogOutButton text={"Keluar"} />
      </div>
    </div>
  );
}

export default DashboardCard;
