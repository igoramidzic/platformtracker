"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const example_handler_1 = require("../handlers/example.handler");
const router = express_1.Router();
router.get('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let example;
    try {
        example = yield example_handler_1.getExample();
    }
    catch (e) {
        example = e;
    }
    console.log(example);
    res.status(200).json({
        title: example
    });
}));
router.get('/names', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let example;
    try {
        example = yield example_handler_1.getNames();
    }
    catch (e) {
        example = e;
    }
    console.log(example);
    res.status(200).json({
        names: example
    });
}));
module.exports = router;
//# sourceMappingURL=example.controller.js.map