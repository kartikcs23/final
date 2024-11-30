
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';

function MenuDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const cakes = [
    { id: '1', name: 'Paneer Tikka', ingredients: ['Paneer', 'Spices'], price: 25, sizes: ['Small', 'Medium', 'Large'] },
    { id: '2', name: 'Aloo Paratha', ingredients: ['Aloo', 'Flour'], price: 20, sizes: ['Small', 'Medium', 'Large'] },
    { id: '3', name: 'Palak Paneer', ingredients: ['Paneer', 'Spinach'], price: 28, sizes: ['Small', 'Medium', 'Large'] },
  
  
    // { id: '4', name: 'Triple Chocolate Cake', ingredients: ['cocoa', 'butter', 'Sugar'], price: 32, sizes: ['Small', 'Medium', 'Large'] },
    // { id: '5', name: 'Chocolate Mousse Cake', ingredients: ['Chocolate', 'Flour', 'Sugar'], price: 22, sizes: ['Small', 'Medium', 'Large'] },
    // { id: '6', name: 'Chocolate Lava Cake', ingredients: ['cocoa', 'Cheese', 'Sugar'], price: 30, sizes: ['Small', 'Medium', 'Large'] },
    { id: '7', name: 'Hakka noodles', ingredients: ['noodle'], price: 18, sizes: ['Small', 'Medium', 'Large'] },
    { id: '8', name: 'Spring rolls', ingredients: ['chicken'], price: 22, sizes: ['Small', 'Medium', 'Large'] },
    { id: '9', name: 'Chilli chicken', ingredients: ['chicken'], price: 26, sizes: ['Small', 'Medium', 'Large'] },
    // { id: '10', name: 'Tropical Fruit cake', ingredients: ['Tropical', 'Cheese', 'Sugar'], price: 24, sizes: ['Small', 'Medium', 'Large'] },
    // { id: '11', name: 'Peach Fruit cake', ingredients: ['Peach', 'Flour', 'Cream'], price: 20, sizes: ['Small', 'Medium', 'Large'] },
    // { id: '12', name: 'Apple Cinnamon Fruit cake', ingredients: ['Apple', 'Flour', 'Sugar'], price: 23, sizes: ['Large', 'Extra Large'] },
    { id: '13', name: 'Lassi', ingredients: ['Milk'], price: 30, sizes: ['Small', 'Medium', 'Large'] },
    { id: '14', name: 'Nimbu pani', ingredients: ['Lemon'], price: 100, sizes: ['Large', 'Extra Large'] },
    { id: '15', name: 'Badam Milk', ingredients: ['Badam'], price: 50, sizes: ['Small', 'Medium', 'Large'] },
    // { id: '16', name: 'Custom Graduation Cake', ingredients: ['Fondant', 'Flour', 'Sugar'], price: 55, sizes: ['Large', 'Extra Large'] },
    // { id: '17', name: 'Custom Baby shower Cake', ingredients: ['Fondant', 'Flour', 'Cream'], price: 45, sizes: ['Small', 'Medium', 'Large'] },
  ];

  // Find the selected cake based on the ID
  const cake = cakes.find(cake => cake.id === id);

  const handleAddToCart = () => {
    addToCart({ ...cake, quantity: parseInt(quantity, 10) });
    alert(`${cake.name} added to cart!`);
  };

  if (!cake) return <p>Cake not found</p>;

  // Inline style for background image
  const backgroundStyle = {
    backgroundImage: 'url("https://content.jdmagicbox.com/v2/comp/bangalore/w3/080pxx80.xx80.230529180551.j1w3/catalogue/shankru-s-kitchen-jc-road-bangalore-fast-food-1p6jtstwrj.jpg")', // Use your image URL here
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    minHeight: '100vh', // This ensures the background image covers the full viewport height
    color: '#fff', // Adjust text color to be visible on the background
  };

  return (
    <div style={backgroundStyle}>
      <h2>{cake.name}</h2>
      <p>Ingredients: {cake.ingredients.join(', ')}</p>
      <p>Price: ${cake.price}</p>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
      </label>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default MenuDetails;