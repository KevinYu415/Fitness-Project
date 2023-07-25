const mongoose = require("mongoose");

const FitnessSchema = {
  name: {
    type: String,
    minLength: [2, "Name must the same as the exercise"],
  },
  value:{
    type: String,
    require: [true, "Please select a day" ],
  },
  reps:{
    type: Number,
    required: [true, "Please Insert number of reps" ],
  }
};

module.exports = mongoose.model("Fitness", FitnessSchema);