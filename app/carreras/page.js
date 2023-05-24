import React from "react";

import Link from "next/link";
import { server } from "@/lib/config";

export default async function page() {
  const res = await fetch(`${server}/api/carreras`, {
    method: "GET",
    cache: "no-cache",
  });
  const carreras = await res.json();

  return (
    <div>
      <Link href={"/carreras/post"}>
        <button>agregar materia</button>
      </Link>
      <ul>
        {carreras.map((materia) => (
          <li>
            <Link href={`/carreras/${materia._id}`}>{materia.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
