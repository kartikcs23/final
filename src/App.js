import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import MenuCategories from './components/MenuCategories';
import CategoriesDetails from './components/CategoriesDetails';
import MenuDetails from './components/MenuDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import { CartProvider } from './components/CartContext';
import Feedback from './components/Feedback';
import SignIn from './components/SignIn';

// Create a context to handle user information and authentication
export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState(null); // Stores logged-in user
  const [registeredUsers, setRegisteredUsers] = useState([]); // Stores registered users

  return (
    <AuthContext.Provider value={{ user, setUser, registeredUsers, setRegisteredUsers }}>
      <CartProvider>
        <Router>
          {/* Header is now rendered only if the user is logged in */}
          {user && <Header user={user} handleLogout={() => setUser(null)} />}

          <Routes>
            {/* Redirect to sign in page if not logged in */}
            <Route path="/" element={user ? <Home /> : <Navigate to="/signin" />} />
            <Route path="/categories" element={user ? <MenuCategories /> : <Navigate to="/signin" />} />
            <Route path="/categories/:categoryId" element={user ? <CategoriesDetails /> : <Navigate to="/signin" />} />
            <Route path="/cake/:id" element={user ? <MenuDetails /> : <Navigate to="/signin" />} />
            <Route path="/cart" element={user ? <Cart /> : <Navigate to="/signin" />} />
            <Route path="/checkout" element={user ? <Checkout /> : <Navigate to="/signin" />} />
            <Route path="/about" element={user ? <AboutUs /> : <Navigate to="/signin" />} />
            <Route path="/contact" element={user ? <ContactForm /> : <Navigate to="/signin" />} />
            <Route path="/feedback" element={user ? <Feedback /> : <Navigate to="/signin" />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>

          <Footer />
        </Router>
      </CartProvider>
    </AuthContext.Provider>
  );
}

export default App;