const jwt = require("jsonwebtoken");

function UserId(token) {
  const user = jwt.verify(token, process.env.SECRET_KEY);

  return user.user;
}

function CreateToken(user) {
  return jwt.sign({ user: user }, process.env.SECRET_KEY);
}

module.exports = {
  UserId,
  CreateToken,
};
