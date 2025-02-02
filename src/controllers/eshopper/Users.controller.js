const Users = require("../../models/eshopper/Users.model");
const jws = require("../../utils/getUserId");

const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    await new Users({ username, email, password }).add();
    res.json({ result: "success" });
  } catch (err) {
    console.error(err);
  }
};

const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await new Users({ username, password }).login();
    const token = jws.CreateToken(user.id);
    res.json({ token: token });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  Login,
  Register,
};
