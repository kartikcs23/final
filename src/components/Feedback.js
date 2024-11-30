import React, { useState } from 'react';

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending it to a server
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      rating: '',
      message: ''
    });
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
      }}
    >
      <h2 style={{ textAlign: 'center' }}>We Value Your Feedback!</h2>
      {submitted && <p style={{ color: 'green', textAlign: 'center' }}>Thank you for your feedback!</p>}
      
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Rating:
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px' }}
          >
            <option value="">Choose Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Feedback:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px' }}
          />
        </label>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#ff6600',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default Feedback;