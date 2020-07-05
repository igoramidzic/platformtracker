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
const name_model_1 = require("../../models/name.model");
exports.getExample = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        name_model_1.Name.create({ name: 'Igor Amidzic' })
            .then((name) => __awaiter(void 0, void 0, void 0, function* () {
            resolve(name);
        }))
            .catch((error) => {
            reject(error);
        });
        // let rand: number = Math.random()
        // setTimeout(() => {
        //     if (rand < 0.5)
        //         resolve("50% Success")
        //     else
        //         reject("50% Failure")
        // }, 1000)
    });
});
exports.getNames = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        name_model_1.Name.find()
            .then((docs) => resolve(docs))
            .catch((err) => reject(err));
    });
});
//# sourceMappingURL=example.handler.js.map