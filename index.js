const express = require("express");
const numRouter = require("./num_router");

const port = process.env.PORT || 80;
const app = express();

app.get("/", (req, res) => {
    console.log("Root");
    res.end("Hello root");
})

app.use(numRouter);

app.get("/*", (req, res) => {
    console.log("Something else");
    res.end("Hello no root sssss");
})

app.listen(port, () => {
    console.log(`Server is listening to ${port}`);
})
