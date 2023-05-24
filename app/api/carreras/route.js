import { getCarreras, postCarrera } from "@/lib/mongo/carreras";

export async function GET(req) {
  let users = await getCarreras();

  return new Response(JSON.stringify(users));
}

export async function POST(req) {
  let body = await req.json();
  let bdResponse = await postCarrera(body);

  return new Response(JSON.stringify(bdResponse));
}
