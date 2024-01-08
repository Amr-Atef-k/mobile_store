const User = require("../models/user.model");

const authenticate = async (req, res, next) => {};

const adminAuth = (req, res, next) => {};

module.exports = {
  authorizeUser: authenticate,
  authorizeAdmin: adminAuth,
};
