import React, { useState } from 'react';
import { css, html, js, nodejs, react, scss } from './Images';
import { Item } from './Item';

export const Skills = () => {
  const [stack, setStack] = useState([
    { id: 0, src: js, language: 'JavaScript', level: 3 },
    { id: 1, src: html, language: 'HTML', level: 3 },
    { id: 2, src: css, language: 'CSS', level: 3 },
    { id: 3, src: scss, language: 'SCSS', level: 3 },
    { id: 4, src: react, language: 'React', level: 2 },
    { id: 5, src: nodejs, language: 'NodeJS', level: 1 },
  ]);

  return (
    <div className="skills">
      <h1 className="section-h1">Стек технологий</h1>
      <div className="stack">
        {stack.map(el => {
          return <Item src={el.src} level={el.level} key={el.id} />;
        })}
      </div>
    </div>
  );
};
