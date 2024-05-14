const { Article, Comment, User } = require("../models");
const moment = require("moment");
const formidable = require("formidable");

const articleController = {
  index: async (req, res) => {
    try {
      const articles = await Article.findAll({ include: User });
      return res.render("admin", {
        articles,
        moment,
      });
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al acceder a los artículos.");
    }
  },

  show: async (req, res) => {
    const users = await User.findAll();
    const article = await Article.findByPk(req.params.id, {
      include: [User, { model: Comment, include: User }],
    });
    res.render("article", { article, users, moment });
  },

  create: async (req, res) => {
    try {
      const users = await User.findAll();
      return res.render("createArticle", {
        users,
      });
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al cargar la página");
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
        const { title, content, userId } = fields;
        await Article.create({
          title,
          content,
          userId,
          image: files.image.newFilename,
        });
        res.redirect("/articles/admin");
      });
    } catch (error) {
      console.error();
      res.send("Ha ocurrido un error al crear el artículo");
    }
  },

  edit: async (req, res) => {
    try {
      const users = await User.findAll();
      const article = await Article.findByPk(req.params.id, { include: User });
      res.render("editArticle", { article, users });
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al cargar la página");
    }
  },

  update: async (req, res) => {
    try {
      const { title, content, image, userId } = req.body;
      await Article.update({ title, content, image, userId }, { where: { id: req.params.id } });
      res.redirect("/articles/admin");
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al modificar el artículo");
    }
  },

  destroy: async (req, res) => {
    try {
      await Article.destroy({ where: { id: req.params.id } });
      res.redirect("/articles/admin");
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al eliminar el artículo");
    }
  },
};

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource

async function edit(req, res) {}

// Update the specified resource in storage.

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = articleController;
