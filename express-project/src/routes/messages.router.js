import express from "express";
import {getMessages, postMessage} from '../controllers/messages.controller.js';

const messagesRouter = express.Router();

messagesRouter.get('/', getMessages);
messagesRouter.post('/', postMessage);

export default messagesRouter;