// controllers/authController.js

//─────────────────────────────── AUTH RENDER BLOCK (GET ROUTES) ───────────────────────────────//

exports.getLogin = (req, res) => {
  res.render("webapp/auth/login", {
    layout: "layouts/auth-layout",
    title: "Log In",
  });
};

exports.getSignup = (req, res) => {
  res.render("webapp/auth/sign-up", {
    layout: "layouts/auth-layout",
    title: "Sign Up",
  });
};

exports.getResetPassword = (req, res) => {
  res.render("webapp/auth/reset-password", {
    layout: "layouts/auth-layout",
    title: "Reset Password",
  });
};

exports.getNewPassword = (req, res) => {
  res.render("webapp/auth/new-password", {
    layout: "layouts/auth-layout",
    title: "New Password",
  });
};

exports.getTwoFactor = (req, res) => {
  res.render("webapp/auth/two-factor", {
    layout: "layouts/auth-layout",
    title: "Two Factor",
  });
};
