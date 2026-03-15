"use client";
import socket from "@/lib/socket";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on("receive-message", (data)=>{
      setMessages((prev) => [...prev, data]);
    });

    return ()=> {
      socket.off("receive-message");
    }
  }, []);

  const sendMessage = () => {
    socket.emit("send-message", message);
    setMessage("");
  }

  return (
    <div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="enter the message"
      />
      <button onClick={sendMessage}>Send</button>
      <div>
        {messages && messages.map((v, i)=>(
          <div key={i} >{v}</div>
        ))}
      </div>
    </div>
  );
}
