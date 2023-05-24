import { getUsers, postUser } from "@/lib/mongo/user";

export async function GET(req) {
  let users = await getUsers();

  return new Response(JSON.stringify(users));
}

export async function POST(req) {
  let body = await req.json();
  let bdResponse = await postUser(body);

  return new Response(JSON.stringify(bdResponse));
}
