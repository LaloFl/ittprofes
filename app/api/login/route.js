import dbConnect from "@/lib/mongo";
import { sha256 } from "js-sha256";

export async function POST(req) {
  let body = await req.json();

  const searchUser = {
    username: body.username,
    sha256_pw: sha256(body.password),
  };

  const db = await dbConnect();

  const user = await db.collection("user").findOne(searchUser);

  if (user) {
    const { sha256_pw, ...userWithoutPassword } = user;
    return new Response(JSON.stringify(userWithoutPassword));
  } else {
    return new Response(JSON.stringify({}), { status: 404 });
  }
}
