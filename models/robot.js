const mongoose = require("mongoose");

// categorie schema
const Robot = mongoose.model("Robot", {
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },

  updated_at: { type: Date, default: Date.now },
});

module.exports = { Robot };
