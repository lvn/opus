'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  text: { type: String, required: true },
  answer: { type: String, required: true }
});

module.exports = mongoose.model('Question', QuestionSchema);
