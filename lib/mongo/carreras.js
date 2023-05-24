import dbConnect from ".";

export async function getCarreras() {
  try {
    const db = await dbConnect();
    const result = await db.collection("carreras").find({}).toArray();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getCarreraById(id) {
  try {
    const db = await dbConnect();
    const result = await db.collection("carreras").findOne({ _id: id });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function postCarrera(data) {
  try {
    const db = await dbConnect();
    const result = await db.collection("carreras").insertOne(data);
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function putCarrera(id, data) {
  try {
    const db = await dbConnect();
    const result = await db
      .collection("carreras")
      .updateOne({ _id: id }, { $set: data });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteCarrera(id) {
  try {
    const db = await dbConnect();
    const result = await db.collection("carreras").deleteOne({ _id: id });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}
