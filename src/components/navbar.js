import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';

import './navbar.css';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className='navbar'>
      <Link to='/'>
        <h1>ReactNotes</h1>
      </Link>
      <div>
        {!isAuthenticated && (
          <button onClick={() => loginWithRedirect({})}>Log in</button>
        )}

        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      </div>
      <span className='navbar-buttons'>
        <Link className='btn' to='/new'>
          New Note
        </Link>
      </span>
    </nav>
  );
};

export default NavBar;
