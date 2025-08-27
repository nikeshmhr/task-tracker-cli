"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.commands = void 0;
exports.commands = {
    ADD: "add",
    UPDATE: "update",
    DELETE: "delete",
    MARK_IN_PROGRESS: "mark-in-progress",
    MARK_DONE: "mark-done",
    LIST: "list",
    HELP: "help",
};
var Status;
(function (Status) {
    Status["TODO"] = "todo";
    Status["IN_PROGRESS"] = "in-progress";
    Status["DONE"] = "done";
})(Status || (exports.Status = Status = {}));
