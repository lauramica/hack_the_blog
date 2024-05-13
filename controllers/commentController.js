const { Comment } = require("../models");

const commentController = {
  store: async (req, res) => {
    try {
      const { content, userId, articleId } = req.body;
      await Comment.create({ content, articleId, userId });
      res.send("Creaste un comentario");
    } catch (error) {
      res.send("Ha ocurrido un error al crear el comentario");
    }
  },
};
module.exports = commentController;
