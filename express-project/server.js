import express from "express";
import friendsRouter from './src/routes/friends.router.js';
import messagesRouter from './src/routes/messages.router.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';


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

app.use('/site', express.static(join(dirname(fileURLToPath(import.meta.url)) , "public")));
app.use(express.json());
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})