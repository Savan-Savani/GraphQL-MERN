const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const colors = require("colors");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT || 5001;

const app = express();
app.use(cors());

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`server running on port: ${port}`));
