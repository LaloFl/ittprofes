import { getMaterias, postMateria } from "@/lib/mongo/materias";

export async function GET(req) {
  let users = await getMaterias();

  return new Response(JSON.stringify(users));
}

export async function POST(req) {
  let body = await req.json();
  let bdResponse = await postMateria(body);

  return new Response(JSON.stringify(bdResponse));
}
