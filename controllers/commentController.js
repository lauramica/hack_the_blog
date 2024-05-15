const { Comment } = require("../models");

const commentController = {
  store: async (req, res) => {
    try {
      const { id } = req.user;
      const { content, articleId } = req.body;
      await Comment.create({ content, articleId, userId: id });
      res.redirect(`/articles/${articleId}`);
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al crear el comentario");
    }
  },
};

module.exports = commentController;
