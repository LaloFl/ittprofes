"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";

export default function SignInButton() {
  const { data, update, status } = useSession();
  console.log(data);
  console.log(status);
  if (data)
    return (
      <div>
        <span>{data.user.name}</span>{" "}
        <button onClick={signOut}>Sign Out</button>
      </div>
    );
  return (
    <div>
      <button onClick={signIn}>Sign in</button>
    </div>
  );
}
