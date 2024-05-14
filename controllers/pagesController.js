const { Article } = require("../models");
const { User } = require("../models");
const moment = require("moment");

const pageController = {
  showHome: async (req, res) => {
    try {
      const articles = await Article.findAll({ include: User, order: [["createdAt", "DESC"]] });
      res.render("home", { articles, moment });
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al cargar los artículos");
    }
  },

  showContact: async (req, res) => {
    res.render("contact");
  },

  showAboutUs: async (req, res) => {
    res.render("aboutUs");
  },
};

module.exports = pageController;
