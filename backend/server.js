const express = require("express");
const cors = require("cors");
const route = require("./routes/emberRoute");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use("/", route);

app.listen(PORT, ()=>{
    console.log("A szerver fut a http://localhost:" + PORT);
})