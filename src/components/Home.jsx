import logo from './logo.svg';
import './App.css';
import Navbarra from './components/NavBar';
import ItemList from './components/ItemList';
import Item from './components/Item'; 
import {useOutluetContext} from 'react-router-dom';
import {useState, useEffect} from 'react';



const Home = () => {
  
  const [loading, setLoading]= useOutletContext();
  
  return (
    <div >
      <header className="App-header">
        <Navbarra />
        <ItemList> </ItemList>
        <Item> </Item>
        <ItemListContainer />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi primera Tienda!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default Home;