import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-slate-200 flex justify-between p-5 ">
      <Link href="/" className="font-bold mr-5">
        Next JS
      </Link>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/admin/users">Users</Link>
      </div>
    </div>
  );
};

export default NavBar;
