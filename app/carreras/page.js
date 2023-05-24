import React from "react";

import Link from "next/link";

export default function page() {
  return (
    <div>
      <ul>
        <Link href={"/carreras/post"}>
          <button>agregar carrera</button>
        </Link>
        <li>
          <Link href={"/carreras/1"}>carrera 1</Link>
        </li>
      </ul>
    </div>
  );
}
