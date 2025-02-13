// import mongoose from "mongoose";
const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      ref: "User",
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  }
);
const Users = mongoose.model('User', userSchema);


module.exports= Users;