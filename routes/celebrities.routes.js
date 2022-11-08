const router = require("express").Router();

const celebrities = require("../models/Celebrity.model");

// all your routes here

router.get("/create", async (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/", async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  try {
    await celebrities.create({
      name,
      occupation,
      catchPhrase,
    });
    res.redirect("/celebrities");
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allCelebrity = await celebrities.find();
    res.render("celebrities/celebrities", { allCelebrity });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
