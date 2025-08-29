import getStorage from "../db";
import { Status } from "../types";

const storage = getStorage();

const markDoneHandler = async (id: string) => {
  const result = await storage.update(id, { status: Status.DONE });

  if (!result) {
    return `Task with ID ${id} not found.`;
  }
};

export default markDoneHandler;
