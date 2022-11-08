const { model, Schema, SchemaTypes } = require("mongoose");

const moviesSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [
    {
      type: Schema.Types.ObjectId,
      ref: "celebrities",
    },
  ],
});

const movies = model("movies", moviesSchema);

module.exports = movies;
