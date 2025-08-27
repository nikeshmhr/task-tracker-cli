import { CommandHandler, CommandType, HandlerOptions } from "./types";
import Logger from "./Logger";

class Program {
  private logger = Logger.getInstance(Program.name);
  private commandHandlers: {
    [key in CommandType]?: CommandHandler;
  } = {};
  private arguments: string[] = [];

  constructor();
  constructor(argv?: string[]) {
    this.logger.log("Program initialized");
    if (argv) {
      this.logger.log("Raw arguments: %o", argv);
      this.arguments = argv;
    } else {
      this.logger.log("No arguments provided. Using process.argv");
      this.arguments = process.argv;
    }
  }

  command(
    name: CommandType,
    action: CallableFunction,
    options?: HandlerOptions
  ) {
    this.logger.log("Command registered: %s", name);
    this.commandHandlers[name] = { action, options };

    return this;
  }

  parse() {}
}

export default Program;
