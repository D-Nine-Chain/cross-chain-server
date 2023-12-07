var dotenv = require('dotenv')
dotenv.config({ path: `./env/.env.${process.env.NODE_ENV}` })
import Keyring from "@polkadot/keyring";
import { initConnections } from "./connections/";
import { defineRoutes } from "./oracle/routes";

import express from 'express';
import { getNodeD9Address } from "./d9/wallet";
export const app = express();
export const d9Keyring = new Keyring({ type: 'sr25519' });

app.use(express.json());
defineRoutes(app);
initConnections().then(() => {
   app.listen(process.env.PORT, () => {

      console.log(`listening on port ${process.env.PORT}`);
      return getNodeD9Address();
   })
})
   .catch(console.error)

