const { User, Role, Article, Comment } = require("../models");

const moment = require("moment"); //date

const userController = {
  index: async (req, res) => {
    try {
      const users = await User.findAll({ include: Role });
      return res.render("adminUsers", {
        users,
        moment,
      });
    } catch (err) {
      console.error(err);
      return res.send("Failed to show the users admin");
    }
  },

  show: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id, { include: Role });
      return res.render("userProfile", { user });
    } catch (err) {
      console.error(err);
      return res.send("Failed to show user profile");
    }
  },

  create: async (req, res) => {
    try {
      return res.render("createUser");
    } catch (err) {
      console.error(err);
      return res.send("Failed to show the page");
    }
  },

  store: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;
      await User.create({ firstname, lastname, email, password, roleId: "3" });
      return res.redirect("/login");
    } catch (err) {
      console.error(err);
      return res.send("Failed to create user");
    }
  },

  edit: async (req, res) => {
    try {
      const roles = await Role.findAll();
      const user = await User.findByPk(req.params.id);
      return res.render("editUser", { user, roles });
    } catch (err) {
      console.error(err);
      return res.send("Failed to show the page");
    }
  },

  update: async (req, res) => {
    try {
      const { firstname, lastname, email, roleId } = req.body;
      const { id } = req.params;

      await User.update({ firstname, lastname, email, roleId }, { where: { id } });

      return res.redirect("/users");
    } catch (err) {
      console.error(err);
      return res.send("Failed to edit user");
    }
  },

  destroy: async (req, res) => {
    try {
      await Article.destroy({ where: { userId: req.params.id } });
      await User.destroy({ where: { id: req.params.id } });
      return res.redirect("/users");
    } catch (err) {
      return res.send("Failed to delete the user");
    }
  },
};

module.exports = userController;
