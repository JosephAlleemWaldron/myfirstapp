import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import Tax from './components/Tax';
import Car from './components/Car';

function App() {
  return (
 <div>
<h1>Week 4 - Reach Elements , React components, JSX</h1>
<Greetings/>
{/* use the Greetings component to show the content */}
{/* supplying the property and its value to the tax components using JSX */}
<Tax price = {20} />
<Tax price = {40} />
<Tax price = {70} />
<Car
  make = {2019}
  model = {"Benz"}
  color = {"black"}
/>

<Car
  make = {2023}
  model = {"civic"}
  color = {"yellow"}
/>
 </div>
  );
}

export default App;
