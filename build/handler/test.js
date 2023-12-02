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
exports.test = void 0;
const chainConnections_1 = require("../chainConnections");
function test(_, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("getting heaader");
            const tronData = yield chainConnections_1.tronWeb.trx.getBlock('latest');
            const d9Data = yield (yield chainConnections_1.d9Api).rpc.chain.getHeader();
            console.log("processe env ", process.env);
            res.send({
                tronData,
                // d9Data
            });
        }
        catch (e) {
            console.log("errror", e);
        }
    });
}
exports.test = test;
