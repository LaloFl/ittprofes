import React from "react";

import Link from "next/link";
import { server } from "@/lib/config";

export default async function page() {
  const res = await fetch(`${server}/api/materias`, {
    method: "GET",
    cache: "no-cache",
  });
  const materias = await res.json();

  return (
    <div>
      <Link href={"/materias/post"}>
        <button>agregar materia</button>
      </Link>
      <ul>
        {materias.map((materia) => (
          <li>
            <Link href={`/materias/${materia._id}`}>{materia.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
