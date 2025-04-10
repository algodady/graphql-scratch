const User = require('../models/User');

const userResolver = {
  getUsers: async () => {
    return await User.find();
  },
  getUser: async ({ id }) => {
    return await User.findById(id);
  },
  createUser: async ({ name, email }) => {
    const newUser = new User({ name, email });
    await newUser.save();
    return newUser;
  },
  updateUser: async ({ id, name, email }) => {
    return await User.findByIdAndUpdate(id, { name, email }, { new: true });
  },
  deleteUser: async ({ id }) => {
    return await User.findByIdAndDelete(id);
  }
};

module.exports = userResolver;
