var dotenv = require('dotenv')
dotenv.config({ path: `./env/.env.${process.env.NODE_ENV}` })
import Keyring from "@polkadot/keyring";
import { initConnections } from "./connections/";
import { defineRoutes } from "./oracle/routes";

import express from 'express';
import { getNodeD9Address } from "./d9/wallet";
import { setupDb } from "./storage/firestoreSetup";
export const app = express();
export const d9Keyring = new Keyring({ type: 'sr25519' });
const cors = require('cors');

app.use(cors());
app.use(express.json());
defineRoutes(app);
setupDb().catch(console.error);
initConnections().then(() => {
   app.listen(parseInt(process.env.PORT!), '0.0.0.0', () => {

      console.log(`listening on port ${process.env.PORT}`);
      return getNodeD9Address();
   })
})
   .catch(console.error)
