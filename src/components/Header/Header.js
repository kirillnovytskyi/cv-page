import React from 'react';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-photo">
            <img
              src="https://image.flaticon.com/icons/png/512/149/149071.png"
              alt="My"
            />
          </div>
          <div className="title">
            <h1>Kirill Novytskyi | Front-End Developer</h1>
          </div>
        </div>
      </div>
    </header>
  );
};
