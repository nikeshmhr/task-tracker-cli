import debug from "debug";
import { name } from "../package.json";

class Logger {
  static getInstance(context: string) {
    const logger = debug(`${name}:${context}`);

    return { log: logger };
  }
}

export default Logger;
