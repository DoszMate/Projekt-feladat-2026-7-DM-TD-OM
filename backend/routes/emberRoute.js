const express = require("express");
const controller = require("../controllers/emberController");

const router = express.Router();

router.get("/", controller.getAllPerson);
router.post("/feltolt", controller.postPerson);
router.put("/modosit/:id", controller.putPerson);
router.delete("/torol/:id", controller.deletePerson);

module.exports = router;