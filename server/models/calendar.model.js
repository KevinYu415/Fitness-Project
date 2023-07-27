const mongoose = require("mongoose");

const FitnessSchema = {
  name: {
    type: String,
    minLength: [2, "Name must the same as the exercise"],
  },
  day:{
    type: String,
    enum : ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    required: [true, "Please select a day" ],
  },
  reps:{
    type: Number,
    required: [true, "Please insert number of reps" ],
  }
};

module.exports = mongoose.model("Fitness", FitnessSchema);