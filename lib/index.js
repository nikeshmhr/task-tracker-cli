"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cli;
const Program_1 = __importDefault(require("./Program"));
function cli() {
    const program = new Program_1.default();
    program.command("add", () => { }, { description: "Add a new task" });
    program.command("update", () => { }, {
        description: "Update an existing task",
    });
    program.command("delete", () => { }, {
        description: "Delete a task",
    });
    program.command("mark-in-progress", () => { }, {
        description: "Mark a task as in progress",
    });
    program.command("mark-done", () => { }, {
        description: "Mark a task as done",
    });
    program.command("list", () => { }, {
        description: "List all tasks, optionally accepts status",
    });
    program.command("help", () => { }, {
        description: "Display help information",
    });
}
