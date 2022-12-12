import express from "express";

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Armin"
  },
  {
    id: 1,
    name: "Morty"
  },
  {
    id: 2,
    name: "Arman"
  }
]

app.get('/', (req, res) => {
  res.send("Hey!")
});

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend doesn't exist"
    })
  }
});

app.post('/messages', (req, res) => {
  console.log("Updating messages...")
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})