import './App.css';
import AddItems from './components/AddItems';
import SeeItems from './components/SeeItems';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([])

  useEffect(()=>{//51.20.76.107 
      axios.get("https://luxshanthavarasa.bio/api/get/items").then(response => {
      
      setItems(response.data)
    })
    .catch(error => {
      // Handle any errors here
      console.log('Error:');
    });
  },[])
  
  return (
    <div className="App">
      <h1>This is an Demo Project for CICD Pipeline</h1>
      <p>By using Github actions and docker in AWS EC2 instance Ubuntu</p>
      <hr/>
      <hr/>
      
      <AddItems setItems={setItems} />
      <SeeItems items={items} />
    </div>
  );
}

export default App;
