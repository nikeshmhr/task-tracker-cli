import { CURRENT_STORAGE } from "../config";
import getStorage from "../db";
import { Status } from "../types";

const storage = getStorage();

const listHandler = async (status?: Status) => {
  const tasks = await storage.list("status", status);
  if (tasks.length === 0) {
    return "No tasks found.";
  }
  return tasks
    .map(
      (task) =>
        `ID: ${task.id}, Description: ${task.description}, Status: ${task.status}`
    )
    .join("\n");
};

export default listHandler;
