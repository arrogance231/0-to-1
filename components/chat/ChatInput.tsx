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
    <path d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' fill='#333' />
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
    <div className='bg-transparent p-4'>
      <form
        onSubmit={handleSubmit}
        className='flex items-center bg-white rounded-full px-4 py-2 shadow-md'
      >
        <button
          type='button'
          onClick={onEnterClinicMode}
          className='p-2 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95'
        >
          <Image src='/clinic.svg' alt='Clinic' width={24} height={24} />
        </button>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={disabled ? "AI is thinking..." : "Type your question..."}
          className='flex-1 bg-transparent border-none focus:ring-0 text-sm text-gray-800 px-2'
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
