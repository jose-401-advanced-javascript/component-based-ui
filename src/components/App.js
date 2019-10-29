import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';

const App = () => (
  <>
    <Header />
    <Character
      name="Rick"
      img="url"
      species="Human" />
    <Footer />
  </>
);

export default App;
