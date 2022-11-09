const router = require("express").Router();

// all your routes here
const Movies = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

router.get("/create", async (req, res) => {
  const allcelebrities = await Celebrity.find();
  res.render("movies/new-movies", { allcelebrities });
});

router.post("/", async (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
  try {
    await Movies.create({
      title,
      genre,
      plot,
      cast,
    });
    res.redirect("/movies");
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allMovies = await Movies.find();
    res.render("movies/movies", { allMovies });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const oneMovie = await Movies.findById(req.params.id);
    res.render("movies/movie-details", { oneMovie });
  } catch (error) {
    next(error);
  }
});

router.get("/:id/delete", async (req, res, next) => {
  try {
    await Movies.findByIdAndDelete(req.params.id);
    res.redirect("/movies");
  } catch (error) {
    next(error);
  }
});

router.get("/:id/update", async (req, res, next) => {
  try {
    const myMovie = await Movies.findById(req.params.id);
    const allcelebrities = await Celebrity.find();
    res.render("movies/edit-movies", { myMovie, allcelebrities });
  } catch (error) {
    next(error);
  }
});

router.post("/:id/update", async (req, res, next) => {
  try {
    const updatedMovie = await Movies.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    console.log(updatedMovie);
    res.redirect("/movies");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
