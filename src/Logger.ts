import debug from "debug";
import { name } from "../package.json";

export type LoggerType = {
  log: debug.Debugger;
};
class Logger {
  static getInstance(context: string): LoggerType {
    const logger = debug(`${name}:${context}`);

    return { log: logger };
  }
}

export default Logger;
