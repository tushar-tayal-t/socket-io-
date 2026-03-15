import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.use(express.json());

app.get('/', (req, res, next)=>{
  res.json({
    message: "This is message",
  });
})

app.listen(5000, ()=>{
  console.log("Server is running at port 3000");
})