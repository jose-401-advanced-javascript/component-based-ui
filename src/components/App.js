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
    <Character
      name="Cornvelious Daniel"
      img="https://rickandmortyapi.com/api/character/avatar/150.jpeg"
      species="Gromflomite" />
    <Character
      name="Lil B"
      img="https://rickandmortyapi.com/api/character/avatar/203.jpeg"
      species="Snail Alien" />
    <Character
      name="Trandor"
      img="https://rickandmortyapi.com/api/character/avatar/363.jpeg"
      species="Krootabulon" />
    <Character
      name="Shmlamantha Shmlicelli"
      img="https://rickandmortyapi.com/api/character/avatar/314.jpeg"
      species="Human" />
    <Character
      name="Cynthia"
      img="https://rickandmortyapi.com/api/character/avatar/88.jpeg"
      species="Human" />
    <Character
      name="Photography Cyborg"
      img="https://rickandmortyapi.com/api/character/avatar/261.jpeg"
      species="Robot" />
    <Character
      name="Shnoopy Bloopers"
      img="https://rickandmortyapi.com/api/character/avatar/320.jpeg"
      species="Alien" />
    <Character
      name="Armagheadon"
      img="https://rickandmortyapi.com/api/character/avatar/24.jpeg"
      species="Cromulon" />
    <Character
      name="David Letterman"
      img="https://rickandmortyapi.com/api/character/avatar/91.jpeg"
      species="Human" />
    <Footer />
  </>
);

export default App;
