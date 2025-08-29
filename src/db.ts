import { CURRENT_STORAGE } from "./config";
import { Task } from "./schema/Task";
import StorageEngine from "./storage/StorageEngine";

export default function getStorage(type = CURRENT_STORAGE) {
  return StorageEngine.getInstance<Task>(type);
}
