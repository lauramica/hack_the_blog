const { Comment } = require("../models");
const { Article } = require("../models");

const commentController = {
  store: async (req, res) => {
    try {
      const { content, userId, articleId } = req.body;
      await Comment.create({ content, articleId, userId });
    } catch (error) {
      res.send("Ha ocurrido un error al crear el comentario");
    }
  },
};
module.exports = commentController;
