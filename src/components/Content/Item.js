import React from 'react';

export const Item = ({ src, level }) => {
  const colors = ['#ccc', '#ccc', '#ccc', '#ccc', '#ccc'];

  colors.forEach((el, idx) => {
    if (idx < level) colors[idx] = '#FF5F5F';
    else colors[idx] = '#ccc';
  });

  return (
    <div className="item">
      <div className="icon">
        <img src={src} alt="JavaScript" />
      </div>
      <div className="skill-level">
        {colors.map((el, idx) => {
          return (
            <span
              key={idx}
              className="dot"
              style={{ backgroundColor: el }}
            ></span>
          );
        })}
      </div>
    </div>
  );
};
