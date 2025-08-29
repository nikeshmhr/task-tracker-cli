import Logger, { LoggerType } from "../Logger";
import { Identifiable } from "../types";
import Storage from "./Storage";

class InMemory<T extends Identifiable> extends Storage<T> {
  protected logger: LoggerType;
  protected data: T[];

  constructor() {
    super();
    this.data = [];
    this.logger = Logger.getInstance(InMemory.name);
  }

  save(data: T): Promise<T> {
    this.data.push(data);
    return Promise.resolve(data);
  }

  list<K extends keyof T>(prop?: K, value?: T[K]): Promise<T[]> {
    if (prop && value !== undefined) {
      const filteredData = this.data.filter((d) => d[prop] === value);
      return Promise.resolve(filteredData);
    }

    return Promise.resolve(this.data);
  }

  loadById(id: string): Promise<T | null> {
    const item = this.data.find((d: any) => d.id === id);
    if (!item) {
      return Promise.resolve(null);
    }

    return Promise.resolve(item);
  }

  delete(id: string): Promise<void> {
    this.data = this.data.filter((d: any) => d.id !== id);
    return Promise.resolve();
  }

  count(): Promise<number> {
    return Promise.resolve(this.data.length);
  }

  update(id: string, data: Partial<T>): Promise<T | null> {
    this.logger.log("Updating item with id:", id, "with data:", data);
    const itemIndex = this.data.findIndex((d) => d.id === id);
    if (itemIndex === -1) {
      return Promise.resolve(null);
    }

    const { id: _, ...strippedData } = data;

    this.data[itemIndex] = {
      ...this.data[itemIndex],
      ...strippedData,
    } as T;

    return Promise.resolve(this.data[itemIndex]);
  }
}

export default InMemory;
