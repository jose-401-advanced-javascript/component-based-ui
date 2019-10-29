import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';

const App = () => (
  <>
    <Header />
    <Character
      name="Rick"
      img="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      species="Human" />
    <Footer />
  </>
);

export default App;
