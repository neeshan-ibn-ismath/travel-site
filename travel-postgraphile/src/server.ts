import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { postgraphile } from "postgraphile";
import PgConnectionFilterPlugin from "postgraphile-plugin-connection-filter";

const app = express();
const port = process.env.PORT ?? 4000;

app.use(cors());

app.use(
  postgraphile(process.env.DATABASE_URL, "public", {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    dynamicJson: true,
    enableCors: true,
    appendPlugins: [PgConnectionFilterPlugin],
    subscriptions: true,
  })
);

app.listen(port, () => 
    console.log(`PostGraphile server listening on port ${port} 🚀
        \nGraphQL API:http://localhost:${port}/graphql 
        \nGUI/IDE:http://localhost:${port}/graphiql` )
)
