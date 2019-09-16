var friends = require(`../data/friends`)

app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

var compatibility = app.post("/api/friends", function(req, res) {
  var compatabilityArray = [];

  var newFriend = req.body;

  for (var i = 0; i < friends.length; i++) {
    var compatibilityResults = (Math.abs(newFriend.score[0] - friends[i].scores[0]) + Math.abs(newFriend.score[1] - friends[i].scores[1]) + Math.abs(newFriend.score[2] - friends[i].scores[2]) + Math.abs(newFriend.score[3] - friends[i].scores[3]) + Math.abs(newFriend.score[4] - friends[i].scores[4]) + Math.abs(newFriend.score[5] - friends[i].scores[5]) + Math.abs(newFriend.score[6] - friends[i].scores[6]) + Math.abs(newFriend.score[7] - friends[i].scores[7]) + Math.abs(newFriend.score[8] - friends[i].scores[8]) + Math.abs(newFriend.score[9] - friends[i].scores[9]))

    var compatibilityObj = {
        results: compatibilityResults,
        name: friends[i].name,
        photo: friends[i].photo
    }
    
    compatabilityArray.push(compatibilityObj);
    console.log(compatabilityArray);
  }
  res.json(compatableFriend);   
})

module.exports = compatibility