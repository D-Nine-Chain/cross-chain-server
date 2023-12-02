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
var dotenv = require('dotenv');
dotenv.config({ path: `./env/.env.${process.env.NODE_ENV}` });
// var dotenvExpand = require('dotenv-expand')
const routes_1 = require("./routes");
const fetch = require('node-fetch');
init().catch(console.error);
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        yield setHCPAToken;
    });
}
function setHCPAToken() {
    return __awaiter(this, void 0, void 0, function* () {
        const clientId = process.env.HCP_CLIENT_ID;
        const clientSecret = process.env.HCP_CLIENT_SECRET;
        const response = yield fetch('https://auth.hashicorp.com/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                audience: 'https://api.hashicorp.cloud',
                grant_type: 'client_credentials',
                client_id: clientId,
                client_secret: clientSecret
            })
        });
        const data = yield response.json();
        process.env.VAULT_TOKEN = data.access_token;
        // return data.access_token;
    });
}
routes_1.app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
