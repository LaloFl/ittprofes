async function getAll(db, colectionName) {
  try {
    result = await db.collection(colectionName).find({}).toArray();
  } catch (error) {
    throw new Error(error);
  }
  return result;
}
