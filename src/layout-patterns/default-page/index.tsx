import { ReactNode } from 'react';
import './style.scss';

interface DefaultPageProps {
  children?: ReactNode;
}

export function DefaultPage(props: DefaultPageProps) {
  return (
    <div className="default-page__container">
      {props.children}
    </div>
  );
}