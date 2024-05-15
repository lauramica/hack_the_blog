const { Article } = require("../models");
const { User } = require("../models");
const moment = require("moment");
const passport = require("passport");

const pageController = {
  showHome: async (req, res) => {
    try {
      const articles = await Article.findAll({
        include: User,
        order: [["createdAt", "DESC"]],
        limit: 10,
      });
      res.render("home", { articles, moment });
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al cargar los artículos");
    }
  },
  showLogin: async (req, res) => {
    try {
      const articles = await Article.findAll({
        include: User,
        order: [["createdAt", "DESC"]],
        limit: 10,
      });
      res.render("login", { articles });
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al cargar los artículos");
    }
  },

  login: passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),

  logout: (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  },

  showContact: async (req, res) => {
    res.render("contact");
  },

  showAboutUs: async (req, res) => {
    res.render("aboutUs");
  },
};

module.exports = pageController;
