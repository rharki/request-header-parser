import express from 'express';
import { Parser } from './parser';

export const app = express(); // We export app so index.js can make use of it
 
app.get('/api/whoami', (req, res) => {
  let parsedData = Parser.parseRequest(req);
  res.status(200).json(parsedData);
});

app.get("/hello/:who", function(req, res) {
  res.end("Hello, " + req.params.who + ".");
  // Fun fact: this has security issues
});