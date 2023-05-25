import React from "react";

import Link from "next/link";
import { server } from "@/lib/config";

export default async function page() {
  const res = await fetch(`${server}/api/profesores`, {
    method: "GET",
    cache: "no-cache",
  });
  const profesores = await res.json();

  return (
    <div>
      <Link href={"/profesores/post"}>
        <button>agregar profesor</button>
      </Link>
      <ul>
        {profesores.map((profesor) => (
          <li key={profesor._id}>
            <Link href={`/profesores/${profesor._id}`}>
              {profesor.full_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
