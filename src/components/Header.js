import { useState } from 'react';
import{LOGO_URL} from './../utils/constants'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
     
        {isLoggedIn ? (
        <button className= "log-btn" onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (<button className= "log-btn" onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    );
  };

  export default Header;