export const commands = {
  ADD: "add",
  UPDATE: "update",
  DELETE: "delete",
  MARK_IN_PROGRESS: "mark-in-progress",
  MARK_DONE: "mark-done",
  LIST: "list",
  HELP: "help",
} as const;

export type CommandType = (typeof commands)[keyof typeof commands];

export const enum Status {
  TODO = "todo",
  IN_PROGRESS = "in-progress",
  DONE = "done",
}

export interface HandlerOptions {
  description?: string;
}

export interface CommandHandler {
  action: CallableFunction;
  options?: HandlerOptions;
}
