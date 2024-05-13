const { Comment } = require("../models");

const commentController = {
  store: async (req, res) => {
    try {
      const { content, userId, articleId } = req.body;
      await Comment.create({ content, articleId, userId });
      console.log(req.body);
      res.redirect(`/articles/${articleId}`);
    } catch (error) {
      console.error(err);
      res.send("Ha ocurrido un error al crear el comentario");
    }
  },
};
module.exports = commentController;
