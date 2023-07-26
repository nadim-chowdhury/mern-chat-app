import axios from "axios";
import { useEffect, useState } from "react";

export default function Chats() {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("http://127.0.0.1:5000/api/chats");
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <h3 key={chat.id}>{chat.chatName}</h3>
      ))}
    </div>
  );
}
