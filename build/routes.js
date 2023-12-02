"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// import { startTransfer } from './handler/start-transfer';
const express_1 = __importDefault(require("express"));
const test_1 = require("./handler/test");
exports.app = (0, express_1.default)();
// app.get('/start-transfer', startTransfer)
exports.app.get('/test', test_1.test);
