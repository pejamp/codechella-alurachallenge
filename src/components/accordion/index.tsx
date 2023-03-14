import './style.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ReactNode, useState } from 'react';

type AccordionProps = {
  title: string;
  content: ReactNode;
}

export function Accordion({ title, content }: AccordionProps) {
  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen(!open);
  }

  return (
    <div className='accordion'>
      <button className={`accordion__title ${open ? 'accordion__title--open' : ''}`} onClick={handleDropdown}>
        <span>{title}</span>
        <ArrowDropDownIcon />
      </button>
      <div className={`accordion__content ${open ? 'accordion__content--open' : ''}`}>
        {content}
      </div>
    </div>
  );
}