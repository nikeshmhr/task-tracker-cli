import Logger, { LoggerType } from "../Logger";
import { Identifiable } from "../types";
import Storage from "./Storage";

class FileStorage<T extends Identifiable> extends Storage<T> {
  protected logger: LoggerType;
  protected data: T[];

  constructor() {
    super();
    this.data = [];
    this.logger = Logger.getInstance(FileStorage.name);
  }

  save(data: T): Promise<T> {
    throw new Error("Method not implemented.");
  }

  loadById(id: string): Promise<T | null> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  list<K extends keyof T>(
    prop?: K | undefined,
    value?: T[K] | undefined
  ): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  update(id: string, data: Partial<T>): Promise<T | null> {
    throw new Error("Method not implemented.");
  }

  count(): Promise<number> {
    throw new Error("Method not implemented.");
  }
}

export default FileStorage;
