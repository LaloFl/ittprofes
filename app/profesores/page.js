import React from "react";

import Link from "next/link";

export default function page() {
  return (
    <div>
      <ul>
        <Link href={"/profesores/post"}>
          <button>agregar profesor</button>
        </Link>
        <li>
          <Link href={"/profesores/1"}>profesor 1</Link>
        </li>
      </ul>
    </div>
  );
}
