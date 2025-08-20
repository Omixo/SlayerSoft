//rolecheck in middeware
function roleCheck(allowedRoles) {
  return (req, res, next) => {
    const role = req.user?.user_metadata?.role;
    if (!role || !allowedRoles.includes(role)) {
      return res.status(403).json({ error: "Forbidden: insufficient permissions" });
    }
    next();
  };
}

module.exports = roleCheck;
