import React from "react";

import Link from "next/link";

import SignInButton from "@/components/SignInButton";

import "@/styles/Navbar.sass";

export default function Navbar() {
  return (
    <nav className={"navbar"}>
      <div className={"options"}>
        <Option href={"/"} text={"Home"} />
        <Option href={"/profesores"} text={"Profesores"} />
      </div>
      <div>
        <SignInButton></SignInButton>
      </div>
    </nav>
  );
}

function Option({ href, text }) {
  return (
    <Link href={href}>
      <span className={"option"}>{text}</span>
    </Link>
  );
}
