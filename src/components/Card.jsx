import React, { useState } from 'react';
import swords from '../Images/swords.png';
import dot from '../Images/dot.png';
import Menu from './Menu';

const Card = ({ img, title }) => {
  const [showMenu, setShowMenu] = useState(false);

  const OpenMenu = () => {
    setShowMenu(!showMenu);
  };
  const CloseMenu = () => {
    setShowMenu(false);
  };
  return (
    <div>
      <div>
        <img src={img} alt='' />

        <div>
          <h1>{title}</h1>
          <span>Premium</span>
          <p>Recreate this wallpaper using AI.</p>
          <button>
            <img src={swords} alt='swords' />
            Start this challenge
          </button>
          <div>
            <button onClick={OpenMenu}>
              <img src={dot} alt='dot' />
            </button>
            {showMenu && <Menu />}
          </div>
        </div>
      </div>
      {showMenu && <div onClick={CloseMenu}></div>}
    </div>
  );
};

export default Card;
