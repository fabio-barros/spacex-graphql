import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
);

const PORT = process.env.PORT || 5001;

app.listen(5000, console.log(`Server rodando na porta ${PORT}`));
