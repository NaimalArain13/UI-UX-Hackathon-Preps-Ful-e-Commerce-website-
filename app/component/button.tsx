import React from 'react';
import clsx from 'clsx'; // Use clsx or classnames for conditional classes

interface ButtonProps {
  text: string;
  color?: string; // Only predefined CSS color names like 'red', 'blue', etc.
  padding?: string;
}

function ButtonComponent({ text, color = "blue", padding = "px-3 py-2" }: ButtonProps) {
  return (
    // <Button className={`bg${color} ${padding} absolute hover:opacity-90 transition duration-200`}>{text}</Button>
    <button
      className={clsx(
        `absolute rounded text-white hover:opacity-90 transition duration-200`,
        `bg-${color}-500`, // Dynamic color
        padding // Direct padding
      )}
    >
      {text}
    </button>
  );
}

export default ButtonComponent