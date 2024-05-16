const { User } = require("../models");
const moment = require("moment"); //date

const userController = {
  index: async (req, res) => {
    try {
      const users = await User.findAll();
      return res.render("adminUsers", {
        users,
        moment,
      });
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al acceder a los artículos.");
    }
  },

  show: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      res.render("userProfile", { user });
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al cargar el perfil");
    }
  },

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
      const { firstname, lastname, email, password, role } = req.body;
      await User.create({ firstname, lastname, email, password, role });
      return res.redirect("/login");
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al crear su usuario.");
    }
  },

  edit: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      res.render("editUser", { user });
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al cargar la página");
    }
  },

  update: async (req, res) => {
    try {
      const { firstname, lastname, email, role } = req.body;
      await User.update({ firstname, lastname, email, role }, { where: { id: req.params.id } });

      res.redirect("/users")
      // en el redirect poner un ternario como este: (true? "A" : "B")

    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al modificar el artículo");
    }
  },

  destroy: async (req, res) => {
    try {
      await User.destroy({ where: { id: req.params.id } });
      res.redirect("/");
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al eliminar el usuario");
    }
  },
};

module.exports = userController;
