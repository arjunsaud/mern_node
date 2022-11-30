const UserModel = require("./models/userModel");
function checkUser(req, res, next) {
  const { username, password } = req.body;
  const user = UserModel.getUser();

  if (!user.length > 0) {
    req.token = "nouser";
    next();
  } else {
    const data = user.filter((value) => {
      if (value.username === username && value.password === password)
        return true;
    });
    if (!data.length > 0) {
      req.token = "error";
      next();
    } else {
      req.token = "ok";
      next();
    }
  }
}

module.exports = checkUser;
