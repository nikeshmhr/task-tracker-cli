"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(specs) {
        this.id = specs.id;
        if (!specs.description) {
            throw new Error("Description is required");
        }
        this.description = specs.description;
        this.status = specs.status || "todo";
        this.createdAt = specs.createdAt || new Date();
        this.updatedAt = specs.updatedAt || new Date();
    }
}
exports.Task = Task;
