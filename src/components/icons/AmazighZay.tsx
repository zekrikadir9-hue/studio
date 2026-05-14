import React from 'react';

export function AmazighZay({ className = "w-6 h-6", color = "currentColor" }: { className?: string, color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 20V80M20 20L80 20M20 80L80 80M20 20C20 20 50 35 50 50C50 65 20 80 20 80M80 20C80 20 50 35 50 50C50 65 80 80 80 80" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}