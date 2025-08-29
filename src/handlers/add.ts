import { CURRENT_STORAGE } from "../config";
import getStorage from "../db";
import { Task } from "../schema/Task";

const storage = getStorage();

const addHandler = async (description: string) => {
  const id = ((await storage.count()) + 1).toString();
  const task = new Task({ id, description });
  await storage.save(task);

  return `Task added successfully (ID: ${task.id})`;
};

export default addHandler;
