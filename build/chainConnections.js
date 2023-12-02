"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tronWeb = exports.d9Api = void 0;
var dotenv = require('dotenv');
dotenv.config({ path: `./env/.env.${process.env.NODE_ENV}` });
const api_1 = require("@polkadot/api");
const wsProvider = new api_1.WsProvider(process.env.D9_ENDPOINT);
const TronWeb = require('tronweb');
exports.d9Api = api_1.ApiPromise.create({ provider: wsProvider });
exports.tronWeb = new TronWeb({
    fullHost: process.env.TRON_ENDPOINT,
    headers: { "TRON-PRO-API-KEY": process.env.TRON_API_KEY }
});
console.log("process env tron", process.env.TRON_API_KEY);
