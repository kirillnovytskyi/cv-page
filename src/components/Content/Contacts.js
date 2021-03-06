import React from 'react';
import { Link } from './Link';

export const Contacts = () => {
  const links = [
    {
      id: 0,
      adress: 'https://www.facebook.com/kiril.novitskyi/',
      icon: 'fab fa-facebook',
      contactFor: 'FaceBook',
    },
    {
      id: 1,
      adress: 'https://github.com/kirillnovytskyi',
      icon: 'fab fa-github',
      contactFor: 'GitHub',
    },
    {
      id: 2,
      adress: 'https://t.me/orcsarecorruptedelves',
      icon: 'fab fa-telegram',
      contactFor: 'Telegram',
    },
  ];

  return (
    <div className="contacts">
      <h1 className="section-h1">Контакты</h1>
      <div className="links">
        {links.map(el => {
          return <Link key={el.id} adress={el.adress} icon={el.icon} />;
        })}
      </div>
    </div>
  );
};
