function viewsFilter(req, res, next) {
  res.locals.loggedUser = req.user;
  next();
}

module.exports = viewsFilter;
