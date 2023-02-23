import React from 'react'

const Title = () => (
    <img
      className="logo"
      alt="logo"
      src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"
    />
);
  
const Header = () => {

    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
};

export default Header