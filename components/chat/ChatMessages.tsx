"use client";
import React, { useEffect, useRef } from "react";

interface Message {
  sender: "patient" | "user";
  text: string;
  time: string;
}

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, isLoading }) => {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className='flex-1 space-y-6 overflow-y-auto p-4'>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            msg.sender === "user" ? "items-end" : "items-start"
          }`}
        >
          <div
            className={`max-w-xs md:max-w-md p-3 rounded-xl shadow-sm animate-pop-in ${
              msg.sender === "user"
                ? "bg-[#279FD5] text-white rounded-br-none"
                : "bg-white text-gray-800 border border-[#EC5638]/50 rounded-bl-none"
            }`}
          >
            <p className='text-sm'>{msg.text}</p>
          </div>
          <span className='text-xs text-gray-500 mt-1 px-1'>{msg.time}</span>
        </div>
      ))}
      {isLoading && (
        <div className='flex items-start'>
          <div className='bg-white text-gray-800 border border-[#EC5638]/50 rounded-bl-none p-3 rounded-xl shadow-sm animate-pop-in'>
            <div className='flex items-center justify-center space-x-2'>
              <div className='w-2 h-2 rounded-full bg-gray-400 animate-pulse'></div>
              <div className='w-2 h-2 rounded-full bg-gray-400 animate-pulse [animation-delay:0.2s]'></div>
              <div className='w-2 h-2 rounded-full bg-gray-400 animate-pulse [animation-delay:0.4s]'></div>
            </div>
          </div>
        </div>
      )}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default ChatMessages;
 