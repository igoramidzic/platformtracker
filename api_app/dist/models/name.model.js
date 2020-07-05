"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const nameSchema = new mongoose_1.default.Schema({
    name: String
}, { timestamps: true });
exports.Name = mongoose_1.default.model("Name", nameSchema);
//# sourceMappingURL=name.model.js.map