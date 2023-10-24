import React from 'react';
import './App.css';
import { MiApi } from './components/MiApi';
import { Footer } from './components/Footer';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <header>
        <Navbar className="bg-light justify-content-center">
          <Navbar.Brand href="#home">
            <img 
               src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png" 
               alt="Pokémon Logo" 
               width="200" 
               className="mr-2" 
            />
  
          </Navbar.Brand>
        </Navbar>
      </header>
      <main>
        <div className="container-fluid p-5">
          <MiApi/>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App;
