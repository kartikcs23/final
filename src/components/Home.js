import React from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate('/categories');
  };

  return (
    
    <div
      style={{
        backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D)',
        
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)'
      }}
    >
      
      
      
      <div className="featured-cakes" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
        <h3>Featured Food of the Day</h3>
        <p>Our Featured Food  - Explore the fresh and organic food at your door step.</p>
        <button 
          onClick={handleViewMoreClick}
          style={{ padding: '10px 20px', backgroundColor: '#ff6600', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}
        >
          View More Food
        </button>
      </div>
    </div>
  );
}

export default Homepage;