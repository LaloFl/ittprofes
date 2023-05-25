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
        <button>agregar carreras</button>
      </Link>
      <ul>
        {carreras.map((carrera) => (
          <li key={carrera._id}>
            <Link href={`/carreras/${carrera._id}`}>{carrera.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
