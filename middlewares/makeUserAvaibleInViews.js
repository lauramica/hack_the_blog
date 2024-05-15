function makeUserAvaibleInViews(req, res, next) {
  res.locals.loggedUser = req.user;
  next();
}

module.exports = makeUserAvaibleInViews;
