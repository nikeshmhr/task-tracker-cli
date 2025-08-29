import { LoggerType } from "../Logger";
import { Identifiable } from "../types";

abstract class Storage<T extends Identifiable> {
  protected abstract data: T[];
  protected abstract logger: LoggerType;

  abstract save(data: T): Promise<T>;
  abstract list<K extends keyof T>(prop?: K, value?: T[K]): Promise<T[]>;
  abstract loadById(id: string): Promise<T | null>;
  abstract delete(id: string): Promise<void>;
  abstract count(): Promise<number>;
  abstract update(id: string, data: Partial<T>): Promise<T | null>;
}

export default Storage;
