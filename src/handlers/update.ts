import { CURRENT_STORAGE } from "../config";
import getStorage from "../db";

const storage = getStorage();

const updateHandler = async (id: string, updatedDescription: string) => {
  const updatedRecord = await storage.update(id, {
    description: updatedDescription,
  });

  if (!updatedRecord) {
    return `Task with ID ${id} not found.`;
  }
};

export default updateHandler;
