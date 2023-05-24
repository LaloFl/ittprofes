import React from "react";

import Link from "next/link";

export default function page() {
  return (
    <div>
      <ul>
        <Link href={"/materias/post"}>
          <button>agregar materia</button>
        </Link>
        <li>
          <Link href={"/materias/1"}>profesor 1</Link>
        </li>
      </ul>
    </div>
  );
}
