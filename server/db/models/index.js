// Require our models -- these should register the model into mongoose
// so the rest of the application can simply call mongoose.model('User')
// anywhere the User model needs to be used.
<<<<<<< HEAD
require('./user');
require('./campaign.model');
require('./bid');
=======
var mongoose = require('mongoose');
var User = mongoose.model('User', require('./user'));
var Bid = mongoose.model('Bid', require('./bid'));
var Campaign = mongoose.model('Campaign', require('./campaign'));
>>>>>>> 0c7aca23d15043103d3d33fade99166b3514a8b7
