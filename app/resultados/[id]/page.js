"use client";

import { useParams, useRouter } from "next/navigation";
import React from "react";

export default function page() {
  //useRouter
  const params = useParams();
  console.log(params);
  return <div>{JSON.stringify(params)}</div>;
}
