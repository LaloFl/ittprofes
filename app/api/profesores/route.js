import { getProfesores, postProfesor } from "@/lib/mongo/profesores";

export async function GET(req) {
  let users = await getProfesores();

  return new Response(JSON.stringify(users));
}

export async function POST(req) {
  let body = await req.json();
  let bdResponse = await postProfesor(body);

  return new Response(JSON.stringify(bdResponse));
}
