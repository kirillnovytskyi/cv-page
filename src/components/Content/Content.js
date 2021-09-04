import React from 'react';
import { About } from './About';
import { Contacts } from './Contacts';
import { Skills } from './Skills';

export const Content = () => {
  return (
    <div className="content">
      <div className="container">
        <About />
        <Skills />
        <Contacts />
      </div>
    </div>
  );
};
