import React from "react";
import Massage from "./Massage";

export default function ChatBox() {
  const messages = [{id:1,text:"Hello There",name:"saif"},{id:2,text:"Hello ",name:"tahid"}];
  return (
    <div className="pb-44 pt-20 container mx-auto max-w-6xl ">
      {
        messages.map(message =>(
          <Massage key={message.id} message={message}/>
        ))
      }
    </div>
  );
}
