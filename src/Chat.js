import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar } from "@material-ui/core";

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          src={`https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png`}
        />
      </div>
      <div className="chat_body"></div>
      <div className="chat_footer"></div>
    </div>
  );
}

export default Chat;
