"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __importDefault(require("./Logger"));
class Program {
    constructor(argv) {
        this.logger = Logger_1.default.getInstance(Program.name);
        this.commandHandlers = {};
        this.arguments = [];
        this.logger.log("Program initialized");
        if (argv) {
            this.logger.log("Raw arguments: %o", argv);
            this.arguments = argv;
        }
        else {
            this.logger.log("No arguments provided. Using process.argv");
            this.arguments = process.argv;
        }
    }
    command(name, action, options) {
        this.logger.log("Command registered: %s", name);
        this.commandHandlers[name] = { action, options };
        return this;
    }
    parse() { }
}
exports.default = Program;
