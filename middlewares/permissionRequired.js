const atLeast = {
  admin: async (req, res, next) => {
    try {
      if (req.user.role.code >= 300) {
        next();
      } else {
        return res.redirect("/");
      }
    } catch (err) {
      console.error(err);
      return res.send("Access denied: you don't have permission to access");
    }
  },
  blogger: async (req, res, next) => {
    try {
      if (req.user.role.code >= 200) {
        next();
      } else {
        return res.redirect("/");
      }
    } catch (err) {
      console.error(err);
      return res.send("Access denied: you don't have permission to access");
    }
  },
};

module.exports = atLeast;
