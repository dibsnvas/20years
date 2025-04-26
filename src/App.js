import React from 'react'
import './App.css';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';
import RopaFormal from './components/RopaFormal';
import SendPhotos from './components/SendPhotos';


function App() {
  
  return (
    <div>
      <HomeScreen />
      <RopaFormal />
      <SendPhotos />
      <Footer />
    </div>

  );
}

export default App;
