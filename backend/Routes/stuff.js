const express = require("express")
const router = express.Router()
const stufffController = require("../Controllers/stuff")
router.post("/",stufffController.createThing );
router.get("/:id", stufffController.findOneThing);
router.put("/:id",stufffController.modifyThing );
router.delete("/:id", stufffController.deleteThing);
router.get("/",stufffController.findThing );

module.exports = router;
