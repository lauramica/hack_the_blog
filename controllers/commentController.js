const { Comment } = require("../models");

const commentController = {
  store: async (req, res) => {
    try {
      const { id } = req.user;
      const { content, articleId } = req.body;
      await Comment.create({ content, articleId, userId: id });
      return res.redirect(`/articles/${articleId}`);
    } catch (err) {
      console.error(err);
      return res.send("Failed to create the comment");
    }
  },
};

module.exports = commentController;
