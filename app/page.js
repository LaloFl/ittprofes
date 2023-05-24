import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>Home</main>
      <ul>
        <li>
          <Link href={"/profesores"}>Profesores</Link>
        </li>
      </ul>
    </div>
  );
}
