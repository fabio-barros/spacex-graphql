import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema.js";
import cors from "cors";
const app = express();
import path from "path";

app.use(cors());
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server rodando na porta ${PORT}`));
