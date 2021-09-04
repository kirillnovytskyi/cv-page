import React from 'react';

export const Link = ({ adress, icon }) => {
  return (
    <a href={adress}>
      <i className={`${icon} link`}></i>
    </a>
  );
};
