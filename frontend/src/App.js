import './App.css';
import AddItems from './components/AddItems';
import SeeItems from './components/SeeItems';

function App() {
  return (
    <div className="App">
      <h1>This is an Demo Project for CICD Pipeline</h1>
      <p>By using Github actions and docker in AWS EC2 instance Ubuntu</p>
      <hr/>
      <hr/>
      <SeeItems />
      <AddItems />
    </div>
  );
}

export default App;
