import './style.scss';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  icon?: ReactNode;
  href?: string;
  type: 'link' | 'button';
}

export function Button({ text, icon, href, type }: ButtonProps) {
  return (
    type == 'link' ? 
    <Link to={!href ? '/' : href} className='button-container'>
      <span className='button__text'>{text}</span>
      <span className='button__icon'>
        {icon}
      </span>
    </Link>
    :
    <button type='submit' className='button-container'>
      <span className='button__text'>{text}</span>
      <span className='button__icon'>
        {icon}
      </span>
    </button>
  );
}