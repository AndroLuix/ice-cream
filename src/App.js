import logo from './logo.svg';
import './App.css';
import { data } from './data';
import { useEffect } from 'react';
import IceCreamComponents from './components/IceCreamComponents';

function App() {
  useEffect(()=>{
    console.log(data)
  },data)
  return (
   <IceCreamComponents/>
  );
}

export default App;
