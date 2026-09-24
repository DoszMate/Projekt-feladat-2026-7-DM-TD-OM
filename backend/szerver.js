const express = require("express");
const PORT = 3000;
const utvonal = require("./route/utvonalak");
const app = express();

app.use(express.json());

app.use('/', utvonal);

app.listen(PORT,() => {
    console.log("Fut a szerver.");
})