import dbConnect from ".";

export async function getMaterias() {
  try {
    const db = await dbConnect();
    const result = await db.collection("materias").find({}).toArray();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getMateriaById(id) {
  try {
    const db = await dbConnect();
    const result = await db.collection("materias").findOne({ _id: id });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function postMateria(data) {
  try {
    const db = await dbConnect();
    const result = await db.collection("materias").insertOne(data);
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function putMateria(id, data) {
  try {
    const db = await dbConnect();
    const result = await db
      .collection("materias")
      .updateOne({ _id: id }, { $set: data });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteMateria(id) {
  try {
    const db = await dbConnect();
    const result = await db.collection("materias").deleteOne({ _id: id });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}
