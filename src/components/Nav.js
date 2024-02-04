import React, { useEffect, useState } from 'react';
import "./Nav.css";

export const Nav = () => {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY >= 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    }
  }, []);

  console.log(show);

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <div className='nav_contents'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png" alt='' className='nav_logo' />
        <img src='logo12.png' className="nav_avatar" />
      </div>
    </nav>
  );
}

export default Nav;
