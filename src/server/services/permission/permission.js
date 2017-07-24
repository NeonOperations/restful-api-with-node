const processPermission = (token, user) => {
  return ((req, res, next) => {
    if (req.session.user &&
      req.session.user.role === role) {
      next();
    } else {
      res.send(403);
    }
  });
}