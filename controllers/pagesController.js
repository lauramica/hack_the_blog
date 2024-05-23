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
      });
      return res.render("home", { articles, moment });
    } catch (err) {
      console.error(err);
      return res.send("Failed to show the home page");
    }
  },
  showLogin: async (req, res) => {
    try {
      const articles = await Article.findAll({
        include: User,
        order: [["createdAt", "DESC"]],
      });
      res.render("login", { articles });
    } catch (err) {
      console.error(err);
      res.send("Failed to show the page");
    }
  },

  login: passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),

  logout: (req, res, next) => {
    try {
      req.logout(function (err) {
        if (err) {
          return next(err);
        }
        return res.redirect("/");
      });
    } catch (err) {
      console.error(err);
      return res.send("Failed to logout");
    }
  },
};

module.exports = pageController;
