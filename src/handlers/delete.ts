import getStorage from "../db";

const storage = getStorage();

const deleteHandler = async (id: string) => {
  await storage.delete(id);
};

export default deleteHandler;
