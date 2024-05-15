const userRoutes = require("./userRoutes");
const articleRoutes = require("./articleRoutes");
const commentRoutes = require("./commentRoutes");
const pagesRoutes = require("./pagesRoutes");
const makeUserAvaibleInViews = require("../middlewares/makeUserAvaibleInViews");

module.exports = (app) => {
  app.use(makeUserAvaibleInViews);

  app.use("/users", userRoutes);
  app.use("/articles", articleRoutes);
  app.use("/comments", commentRoutes);
  app.use("/", pagesRoutes);
};
