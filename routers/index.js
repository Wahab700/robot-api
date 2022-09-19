const express = require("express");
const router = express.Router();
const {
  getAllRobot,
  postAllRobot,
  getSingleRobot,
  putSingleRobot,
  deleteSingleRobot,
} = require("../controllers/robotController");


// routes
router.get("/api/robot/get", getAllRobot);
router.post("/api/robot/post", postAllRobot);
router.get("/api/robot/single/get/:id", getSingleRobot);
router.put("/api/robot/put/:id", putSingleRobot);
router.delete("/api/robot/delete/:id", deleteSingleRobot);

module.exports = router;
