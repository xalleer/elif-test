import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shops from "./components/Shops/Shops";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Goods from "./components/Goods/Goods";
function App() {
  return (

    <div className='marking'>
        <ShoppingCart/>
        <div className='main'>
            <Shops/>
            <Goods/>
        </div>
      </div>

  );
}

export default App;
