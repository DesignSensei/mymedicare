// controllers/pageController.js

//─────────────────────────────── WEBSITE RENDER BLOCK (GET ROUTES) ───────────────────────────────//

exports.getLandingPage = (req, res) => {
  res.render("website/home", {
    layout: "layouts/website-layout",
    title: "Home",
    wfPage: "67469be284b048fa58eda5a5",
    scripts: `<script src="js/i.js></script>"`,
  });
};
