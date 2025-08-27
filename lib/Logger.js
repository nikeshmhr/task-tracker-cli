"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const package_json_1 = require("../package.json");
class Logger {
    static getInstance(context) {
        const logger = (0, debug_1.default)(`${package_json_1.name}:${context}`);
        return { log: logger };
    }
}
exports.default = Logger;
