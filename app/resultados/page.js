import React from "react";

import Link from "next/link";
import { server } from "@/lib/config";

export default async function page() {
  const res = await fetch(`${server}/api/calificar`, {
    method: "GET",
    cache: "no-cache",
  });
  const calificaciones = await res.json();

  return (
    <div>
      <Link href={"/calificar"}>
        <button>agregar calificación</button>
      </Link>
      <ul>
        {calificaciones.map((calificacion) => (
          <li key={calificacion._id}>
            <Link href={`/resultados/${calificacion._id}`}>
              {JSON.stringify(
                {
                  profesor: calificacion.id_profesor,
                  materia: calificacion.id_materia,
                  calificacion: calificacion.promedio,
                },
                null,
                4
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
