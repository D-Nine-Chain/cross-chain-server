var dotenv = require('dotenv')
dotenv.config({ path: `./env/.env.${process.env.NODE_ENV}` })
import Keyring from "@polkadot/keyring";
import { initConnections } from "./connections/";
import { defineRoutes } from "./routes";

import express from 'express';
export const app = express();

export const d9Keyring = new Keyring({ type: 'sr25519' });

defineRoutes(app);
initConnections().then(() => {
   app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`);
   });
})
   .catch(console.error)

