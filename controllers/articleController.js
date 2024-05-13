const { Article } = require("../models");
const { User } = require("../models");

const articleController = {
  index: async (req, res) => {
    try {
      const articles = await Article.findAll();
      return res.render("admin", {
        articles,
      });
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al acceder a los artículos.");
    }
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
      const { title, content, image, userId } = req.body;
      await Article.create({ title, content, image, userId });
      res.redirect("/panel/admin");
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al crear el artúclo");
    }
  },
};

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource

async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = articleController;
