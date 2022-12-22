import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export function getMessages(req, res) {
  // res.send("Hey there!");
  const mediaPath = join(dirname(fileURLToPath(import.meta.url)) , "../public/image/pic1.jpg");
   res.sendFile(mediaPath);
};

export function postMessage(req, res) {
  console.log("Updating messages...")
};