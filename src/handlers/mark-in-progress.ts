import getStorage from "../db";
import { Status } from "../types";

const storage = getStorage();

const markInProgressHandler = async (id: string) => {
  const result = await storage.update(id, { status: Status.IN_PROGRESS });
  if (!result) {
    return `Task with ID ${id} not found.`;
  }
};

export default markInProgressHandler;
