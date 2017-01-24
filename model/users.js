// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create User schema
var UserSchema = new Schema({
  // title is a required string
  userID: {
    type: mongoose.Schema.Types.ObjectId,
        index: true
  },
  
  name: {
  	type: String,

  },

  recepies: {
    type: Array,
    default: []    
  }
});

// Create the User model with the UserSchema
var User = mongoose.model("User", UserSchema);

// Export the model
module.exports = User;