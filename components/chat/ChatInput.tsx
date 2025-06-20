"use client";
import Image from "next/image";
import React, { useState } from "react";

const SendIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4.33285 11.9999L21.3149 2.19194C21.6841 1.99632 22.1461 2.2974 21.963 2.68832L17.155 12.0019L21.963 21.3155C22.147 21.7044 21.6841 22.0055 21.3149 21.81L4.33285 11.9999Z'
      fill='#333'
    />
  </svg>
);

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  disabled: boolean;
  onEnterClinicMode?: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  disabled,
  onEnterClinicMode,
}) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !disabled) {
      onSendMessage(text);
      setText("");
    }
  };

  return (
    <div className='bg-transparent p-2'>
      <form
        onSubmit={handleSubmit}
        className='flex items-center bg-white rounded-full p-1 shadow-md'
      >
        <Image
          src='/chat-icon.svgg.svg'
          alt='Chat Icon'
          width={28}
          height={28}
          className='mx-2 cursor-pointer'
          onClick={onEnterClinicMode}
        />
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={disabled ? "AI is thinking..." : "Type your question..."}
          className='flex-1 bg-transparent border-none focus:ring-0 text-sm text-gray-800'
          disabled={disabled}
        />
        <button
          type='submit'
          className='p-2 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 disabled:opacity-50 disabled:scale-100'
          disabled={disabled || !text.trim()}
        >
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
