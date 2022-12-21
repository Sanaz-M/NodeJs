import express from "express";
import friendsRouter from './routes/friends.router.js';
import messagesRouter from './routes/messages.router.js';


const app = express();
const router = express.Router();
const PORT = 3000;


//when writing middleware, always make sure call the next(), otherwise, the data would not pass to other functions
app.use((req,res,next) => {
  const start = Date.now();
  next();
  const endTime = Date.now() - start;
  console.log(`${req.method}, ${req.url}, ${endTime}s`);
});

app.use(express.json());
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})