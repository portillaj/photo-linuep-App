var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LineupSchema = new Schema({
  caseNumber: {
    type: Number,
    unique: true
  },
  lineupNumber: {
    type: Number,
    unique: true
  },
  dateCreated: {
    type: Date
  },
  crime: {
    type: String
  },
  location: {
    type: String
  },
  time: {
    type: Date,
    default: Date.now
  },
  imagePath: {
    type: String,
    unique: true
  }
});

var Lineup = mongoose.model("Lineup", LineupSchema);

module.exports = Lineup;
