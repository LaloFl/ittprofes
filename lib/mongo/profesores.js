import dbConnect from ".";

export async function getProfesores() {
  try {
    const db = await dbConnect();
    const result = await db.collection("profesores").find({}).toArray();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProfesorById(id) {
  try {
    const db = await dbConnect();
    const result = await db.collection("profesores").findOne({ _id: id });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function postProfesor(data) {
  try {
    const db = await dbConnect();
    const result = await db.collection("profesores").insertOne(data);
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function putProfesor(id, data) {
  try {
    const db = await dbConnect();
    const result = await db
      .collection("profesores")
      .updateOne({ _id: id }, { $set: data });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteProfesor(id) {
  try {
    const db = await dbConnect();
    const result = await db.collection("profesores").deleteOne({ _id: id });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}
