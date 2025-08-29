import { Identifiable } from "../types";
import StorageType from "./enums";
import FileStorage from "./FileStorage";
import InMemory from "./InMemory";
import Storage from "./Storage";

class StorageFactory {
  static initialize<T extends Identifiable>(type: StorageType): Storage<T> {
    if (type === StorageType.InMemory) {
      return new InMemory<T>();
    } else if (type === StorageType.File) {
      return new FileStorage<T>();
    } else {
      throw new Error("Unsupported storage type");
    }
  }
}

export default StorageFactory;
