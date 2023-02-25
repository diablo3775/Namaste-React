import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const loggedInUser = () => {
  return true;
}

const Title = () => (
    <img
      className="logo"
      alt="logo"
      src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"
    />
);
  
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <Link to="/">
            <li>Home{user.user}</li>
            </Link>
            <Link to="/about">
            <li>About</li>
            </Link>
            <Link to="/contact">
            <li>Contact</li>
            </Link>
            <li>Cart</li>
            <Link to="/instamart">
              <li>Instamart</li>
            </Link>
          </ul>
        </div>
        {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
      </div>
    );
};

export default Header