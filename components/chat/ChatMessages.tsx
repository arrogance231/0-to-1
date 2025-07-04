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
    <div className='flex-1 space-y-4 overflow-y-auto p-4 w-full max-w-4xl mx-auto pb-24'>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${
              msg.sender === "user"
                ? "bg-[#27A8E0] text-white rounded-br-md"
                : "bg-white text-[#1E4462] border border-[#EC5638]/30 rounded-bl-md"
            }`}
          >
            {/* Sender indicator */}
            <div
              className={`text-xs font-medium mb-1 ${
                msg.sender === "user" ? "text-blue-100" : "text-[#EC5638]"
              }`}
            >
              {msg.sender === "user" ? "You" : "Patient"}
            </div>

            {/* Message text */}
            <p className='text-sm leading-relaxed whitespace-pre-line'>
              {msg.sender === "patient"
                ? (() => {
                    // Try to extract JSON if present after some text
                    const jsonMatch = msg.text.match(
                      /({\s*\"answer\"[\s\S]*?\})/
                    );
                    if (jsonMatch) {
                      try {
                        const parsed = JSON.parse(jsonMatch[1]);
                        if (
                          parsed &&
                          typeof parsed === "object" &&
                          parsed.answer
                        ) {
                          return parsed.answer;
                        }
                      } catch {}
                      // Not valid JSON, fallback
                      return msg.text.replace(jsonMatch[1], "").trim();
                    } else {
                      // Try to parse as pure JSON
                      try {
                        const parsed = JSON.parse(msg.text);
                        if (
                          parsed &&
                          typeof parsed === "object" &&
                          parsed.answer
                        ) {
                          return parsed.answer;
                        }
                      } catch {}
                      // Not JSON, use as is
                    }
                    return msg.text;
                  })()
                : msg.text}
            </p>

            {/* Time stamp */}
            <div
              className={`text-xs mt-2 ${
                msg.sender === "user" ? "text-blue-100" : "text-gray-500"
              }`}
            >
              {msg.time}
            </div>
          </div>
        </div>
      ))}

      {isLoading && (
        <div className='flex justify-start'>
          <div className='bg-white text-gray-800 border border-[#EC5638]/30 rounded-2xl rounded-bl-md p-4 shadow-sm animate-pop-in max-w-[80%]'>
            <div className='text-xs font-medium text-[#EC5638] mb-2'>
              Patient
            </div>
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
