const { Article, Comment, User } = require("../models");
const moment = require("moment"); //date
const formidable = require("formidable"); //files

const articleController = {
  index: async (req, res) => {
    try {
      const articles = await Article.findAll({ include: User, order: [["createdAt", "DESC"]] });
      return res.render("adminArticles", {
        articles,
        moment,
      });
    } catch (err) {
      console.error(err);
      return res.send("Failed to show the articles admin ");
    }
  },

  show: async (req, res) => {
    try {
      const users = await User.findAll();
      const article = await Article.findByPk(req.params.id, {
        include: [User, { model: Comment, include: User }],
      });
      return res.render("article", { article, users, moment });
    } catch (err) {
      console.error(err);
      return res.send("Failed to show the article");
    }
  },

  create: async (req, res) => {
    try {
      const users = await User.findAll();
      return res.render("createArticle", {
        users,
      });
    } catch (err) {
      console.error(err);
      return res.send("Failed to show the page");
    }
  },

  store: async (req, res) => {
    try {
      const form = formidable({
        multiples: true,
        keepExtensions: true,
        uploadDir: __dirname + "/../public/img",
      });
      form.parse(req, async (err, fields, files) => {
        const { id } = req.user;
        const { title, content } = fields;
        await Article.create({
          title,
          content,
          userId: id,
          image: files.image.newFilename,
        });
        return res.redirect("/articles/admin");
      });
    } catch (err) {
      console.error(err);
      return res.send("Failed to create the article");
    }
  },

  edit: async (req, res) => {
    try {
      const users = await User.findAll();
      const article = await Article.findByPk(req.params.id, { include: User });
      res.render("editArticle", { article, users });
    } catch (err) {
      console.error(err);
      return res.send("Failed to show the page");
    }
  },

  update: async (req, res) => {
    try {
      const { title, content, image, userId } = req.body;
      await Article.update({ title, content, image, userId }, { where: { id: req.params.id } });
      return res.redirect("/users");
    } catch (err) {
      console.error(err);
      return res.send("Failed to edit the article");
    }
  },

  destroy: async (req, res) => {
    try {
      await Article.destroy({ where: { id: req.params.id } });
      return res.redirect("/articles/admin");
    } catch (err) {
      console.error(err);
      return res.send("Failed to delete the article");
    }
  },
};

module.exports = articleController;
