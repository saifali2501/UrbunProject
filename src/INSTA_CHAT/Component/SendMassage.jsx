import React, { useState } from "react";
import { Input } from "reactstrap";

export default function SendMessage() {
  const [value, setValue] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Your send message logic here
    setValue("");
  };

  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-4 sm:py-6 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-2 container mx-auto max-w-6xl flex px-4">
        <input
          className="w-full h-10 focus:outline-none bg-gray-100 rounded-r-none rounded-l-md px-4"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit" className="bg-blue-500 text-white h-10 px-4 rounded-r-md rounded-l-none">
          Send
        </button>
      </form>
    </div>
  );
}
