import Logger from "../Logger";
import { Identifiable } from "../types";
import StorageType from "./enums";
import Storage from "./Storage";
import StorageFactory from "./StorageFactory";

class StorageEngine {
  private static logger = Logger.getInstance(StorageEngine.name);
  private static instance: Storage<Identifiable>;

  private constructor() {}

  static getInstance<T extends Identifiable>(type: StorageType): Storage<T> {
    StorageEngine.logger.log("Requesting storage instance of type: %s", type);
    if (!StorageEngine.instance) {
      StorageEngine.logger.log("No existing instance found. Creating new one.");
      StorageEngine.instance = StorageFactory.initialize<T>(type);
    }

    return StorageEngine.instance as Storage<T>;
  }
}

export default StorageEngine;
