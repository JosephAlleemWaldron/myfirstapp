import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import Tax from './components/Tax';

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
 </div>
  );
}

export default App;
