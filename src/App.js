import React from 'react';
import Navbar from './components/home/Navbar.jsx';
import Footer from './components/home/Footer.jsx';

const App = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
)

export default App