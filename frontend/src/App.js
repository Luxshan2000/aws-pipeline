import './App.css';
import AddItems from './components/AddItems';
import SeeItems from './components/SeeItems';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([])

  useEffect(()=>{
      axios.get("http://51.20.93.112:5000/api/get/items").then(response => {
      
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
      
      <AddItems />
      <SeeItems items={items} />
    </div>
  );
}

export default App;
