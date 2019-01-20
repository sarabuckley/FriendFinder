// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");

module.exports = function (app) {
  
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {

    var userInput = req.body;

    var userResponses = userInput.scores;

    // Compute best friend match
    var matchName = '';
    var matchImage = '';
    var totalDifference = 10000; // Make the initial value big for comparison

    // Examine all existing friends in the list
    for (var i = 0; i < friends.length; i++) {
      // console.log('friend = ' + JSON.stringify(friends[i]));

      // Compute differences for each question
      var diff = 0;
      for (var j = 0; j < userResponses.length; j++) {
        diff += Math.abs(friends[i].scores[j] - userResponses[j]);
      }
      console.log('diff = ' + diff);

      // If lowest difference, record the friend match
      if (diff < totalDifference) {
        console.log('Closest match found = ' + diff);
        console.log('Friend name = ' + friends[i].name);
        console.log('Friend image = ' + friends[i].photo);

        totalDifference = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
      }
    }

    friends.push(req.body)

    res.json({ status: 'OK', matchName: matchName, matchImage: matchImage })


  });

};
