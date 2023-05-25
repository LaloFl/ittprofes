import {
  getCalificaciones,
  postCalificacion,
} from "@/lib/mongo/calificaciones";

export async function GET(req) {
  let users = await getCalificaciones();

  return new Response(JSON.stringify(users));
}

export async function POST(req) {
  let body = await req.json();
  let bdResponse = await postCalificacion(body);

  return new Response(JSON.stringify(bdResponse));
}
