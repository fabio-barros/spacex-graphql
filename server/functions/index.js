const functions = require('firebase-functions');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
);

app.use(express.static("public"));

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "public", "index.html"));
// });

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server rodando na porta ${PORT}`));

exports.spacex = functions.https.onRequest(app);

