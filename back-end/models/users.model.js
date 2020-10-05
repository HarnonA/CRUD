const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: [true, "Email is required"]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false
    },
    userName: {
      type: String,
      required: [true, "Username is required"]
    },
    // active: {
    //     type: Boolean,
    //     required: [true, "Active is required"]
    // }
  });
  const User = mongoose.model("User", userSchema);
  User.insertMany({
    email: 'adm@email.com',
    password: 'adm',
    userName: 'adm'
  })
  
  
  // const User = require('./models/users.model');
  // const user = new User({
  //   email: 'email@email.com',
  //   password: 'mypassword',
  //   userName: 'username'
  // });
  // user.save()

  module.exports = User;