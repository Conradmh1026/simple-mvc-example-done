const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdDate: {
    type: Number,
    min: 0,
  },
  createdData: {
    type: Date,
    default: Date.now,
  },
});

DogSchema.statics.sayName = (dog) => {
  console.dir(dog.name);
};

DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };
  return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('Dog', DogSchema);

module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
