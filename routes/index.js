const userRoutes = require("./userRoutes");
const articleRoutes = require("./articleRoutes");
const commentRoutes = require("./commentRoutes");
const pagesRoutes = require("./pagesRoutes");

module.exports = (app) => {
  app.use("/users", userRoutes);
  app.use("/articles", articleRoutes);
  app.use("/comments", commentRoutes);
  app.use("/", pagesRoutes);
};
