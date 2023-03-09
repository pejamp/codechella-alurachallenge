import './style.scss';
import { ReactNode } from 'react';

interface ButtonProps {
  text: string;
  icon?: ReactNode;
}

export function Button({ text, icon }: ButtonProps) {
  return (
    <a href="" className='button-container'>
      <span className='button__text'>{text}</span>
      <span className='button__icon'>
        {icon}
      </span>
    </a>
  );
}