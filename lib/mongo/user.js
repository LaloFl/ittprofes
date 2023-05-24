import dbConnect from ".";

export async function getUsers() {
  try {
    const db = await dbConnect();
    const result = await db.collection("user").find({}).toArray();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUserById(id) {
  try {
    const db = await dbConnect();
    const result = await db.collection("user").findOne({ _id: id });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUserByNControl(nControl) {
  try {
    const db = await dbConnect();
    const result = await db
      .collection("user")
      .findOne({ n_control: n_control });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function postUser(data) {
  try {
    const db = await dbConnect();
    const result = await db.collection("user").insertOne(data);
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function putUser(id, data) {
  try {
    const db = await dbConnect();
    const result = await db
      .collection("user")
      .updateOne({ _id: id }, { $set: data });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteUser(id) {
  try {
    const db = await dbConnect();
    const result = await db.collection("user").deleteOne({ _id: id });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}
