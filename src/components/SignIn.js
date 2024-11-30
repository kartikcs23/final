import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

function SignIn() {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the user in directly without checking against registered users
    setUser({ email }); // Set the user as logged in
    alert('Sign in successful!');
    navigate('/'); // Redirect to the home page
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://www.johnsons-stalbridge.com/assets/cache/images/products/restaurant/buttermilk-750x500-b36.jpg)', // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Make it take up the full screen height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '20px', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>
        Star Hotel
      </h1>

      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background for the form
          padding: '30px 40px',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '400px', // Limit the width of the form
        }}
      >
        <h2 style={{ marginBottom: '20px' }}>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                backgroundColor: '#fff',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                backgroundColor: '#fff',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#ff6600',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;