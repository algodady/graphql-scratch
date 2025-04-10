const userResolver = require('../resolvers/userResolver');

const userController = {
  getUsers: userResolver.getUsers,
  getUser: userResolver.getUser,
  createUser: userResolver.createUser,
  updateUser: userResolver.updateUser,
  deleteUser: userResolver.deleteUser,
};

module.exports = userController;
