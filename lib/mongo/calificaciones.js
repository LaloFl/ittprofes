import dbConnect from ".";

export async function getCalificaciones() {
  try {
    const db = await dbConnect();
    const result = await db.collection("calificaciones").find({}).toArray();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getCalificacionById(id) {
  try {
    const db = await dbConnect();
    const result = await db.collection("calificaciones").findOne({ _id: id });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function postCalificacion(data) {
  try {
    const db = await dbConnect();
    const result = await db.collection("calificaciones").insertOne(data);
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function putCalificacion(id, data) {
  try {
    const db = await dbConnect();
    const result = await db
      .collection("calificaciones")
      .updateOne({ _id: id }, { $set: data });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteCalificacion(id) {
  try {
    const db = await dbConnect();
    const result = await db.collection("calificaciones").deleteOne({ _id: id });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}
