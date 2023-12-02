var dotenv = require('dotenv')
dotenv.config({ path: `./env/.env.${process.env.NODE_ENV}` })
import { initConnections } from "./connections/";
import { defineRoutes } from "./routes";
// var dotenvExpand = require('dotenv-expand')

import express from 'express';
export const app = express();
defineRoutes(app);
initConnections().then(() => {
   app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`);
   });
})
   .catch(console.error)


