const { User } = require("../models");

const userController = {
  create: async (req, res) => {
    try {
      return res.render("createUser");
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al cargar el formulario.");
    }
  },

  store: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;
      console.log(req.body);
      // await User.create({ firstname, lastname, email, password });
      // return res.redirect("/");
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al crear su usuario.");
    }
  },
};

module.exports = userController;
