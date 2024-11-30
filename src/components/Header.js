import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ user, handleLogout }) {
  const navigate = useNavigate();

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#ff6600',
        color: '#fff',
      }}
    >
      <h1>Star Hotel</h1>
      <nav style={{ display: 'flex', gap: '15px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/categories" style={{ color: '#fff', textDecoration: 'none' }}>Menu</Link>
        <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>Cart</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link>
        <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        <Link to="/feedback" style={{ color: '#fff', textDecoration: 'none' }}>Feedback</Link>
      </nav>

      {/* Conditional login/logout button */}
      <div>
        {user ? (
          <button
            onClick={handleLogout}
            style={{
              padding: '8px 15px',
              backgroundColor: '#fff',
              color: '#ff6600',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Log out
          </button>
        ) : (
          <button
            onClick={() => navigate('/signin')}
            style={{
              padding: '8px 15px',
              backgroundColor: '#fff',
              color: '#ff6600',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Log Out
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;