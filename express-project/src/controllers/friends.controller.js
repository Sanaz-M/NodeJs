import { friends } from "../models/friends.model.js";


export function getFriends(req, res) {
  res.json(friends);
};

//post method in express 
export function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name"
    })
  }
  const newFriend = {
    id: friends.length,
    name: req.body.name
  }
  friends.push(newFriend);
  res.json(newFriend);
};

export function getOneFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend doesn't exist"
    })
  }
};