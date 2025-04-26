"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="bg-slate-200 flex justify-between p-5 ">
      <Link href="/" className="font-bold mr-5">
        Next JS
      </Link>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/users">Users</Link>
        {status === "loading" && (
          // render a spinner while loading from daisy ui
          <span className="loading loading-spinner text-accent"></span>
        )}
        {status === "authenticated" ? (
          <p>{session?.user?.name}</p>
        ) : (
          <Link href="/api/auth/signin">Sign In</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
