//  Add your code here
const { model, Schema } = require("mongoose");

const celebritiesSchema = new Schema({
  name: String,
  occupation: {
    type: String,
    enum: ["actor", "singer", "comedian", "unknown"],
  },
  catchPhrase: String,
});

const celebrities = model("celebrities", celebritiesSchema);

module.exports = celebrities;
