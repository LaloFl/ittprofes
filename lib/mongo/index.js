import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;
if (!URI)
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
let client = new MongoClient(URI);

const dbName = "ittprofes";

async function dbConnect() {
  await client.connect();
  return client.db(dbName);
}

export default dbConnect;
