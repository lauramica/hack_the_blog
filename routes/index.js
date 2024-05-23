const userRoutes = require("./userRoutes");
const articleRoutes = require("./articleRoutes");
const commentRoutes = require("./commentRoutes");
const pagesRoutes = require("./pagesRoutes");
const viewsFilter = require("../middlewares/viewsFilter");

module.exports = (app) => {
  app.use(viewsFilter);

  app.use("/users", userRoutes);
  app.use("/articles", articleRoutes);
  app.use("/comments", commentRoutes);
  app.use("/", pagesRoutes);
};
