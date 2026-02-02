import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="relative">
      <div className="mx-auto absolute z-20 top-0 left-0 pt-8">
        <Header />
      </div>

      <main className="min-h-screen ">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
