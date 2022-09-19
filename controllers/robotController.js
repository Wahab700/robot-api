const { Robot } = require("../models/robot");

// get all 
const getAllRobot = (req, res) => {
  Robot.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
};

// post all
const postAllRobot = (req, res) => {
  console.log("data: ", req);

  const new_robot = new Robot({
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
  });
  new_robot.save((err, data) => {
    res.status(200).json({
      code: 200,
      message: "robot data added successfully",
      addRobot: data,
    });
  });
};

// get single
const getSingleRobot = (req, res) => {
  Robot.findById(req.params.id, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
};

// put or update
const putSingleRobot = (req, res) => {

  const new_robot_data = {
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
  };


  Robot.findByIdAndUpdate(
    req.params.id,
    { $set: new_robot_data },
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          message: "robot data updated successfully",
          updateRobot: data,
        });
      } else {
        console.log(err);
      }
    }
  );
};

// delete single
const deleteSingleRobot = (req, res) => {
  Robot.findByIdAndDelete(req.params.id, (err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        message: "robot data deleted succeffully",
        deleteRobot: data,
      });
    }
  });
};

module.exports = {
  getAllRobot,
  postAllRobot,
  getSingleRobot,
  putSingleRobot,
  deleteSingleRobot,
};
