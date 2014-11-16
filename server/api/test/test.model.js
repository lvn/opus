'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TestSchema = new Schema({
  name: { type: String, required: true },
  questions: { type: [Schema.Types.ObjectId], required: true },
  info: String
});

module.exports = mongoose.model('Test', TestSchema);
