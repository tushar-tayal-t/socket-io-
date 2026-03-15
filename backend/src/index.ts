import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket)=>{
  console.log("User connected:", socket.id);

  socket.on("send-message", (data)=>{
    console.log("User send the data:", data);
    io.emit("receive-message", data);
  });

  // socket.emit("private-message", "Hello, this is just for you!");
  
  socket.on("disconnect", ()=>{
    console.log("user is disconnected");
  })
})

server.listen(5000, ()=>{
  console.log("Server is running at port 5000");
})


