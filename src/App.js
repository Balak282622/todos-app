
import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Todos } from './Components/Todos';

function App() {
  let todos = [
    {
      sno: 1,
      title: "Get Better Job",
      description: "Search for compitable job, apply and perform best in interview"
    },
    {
      sno: 2,
      title: "Get car",
      description: "Get a better job and save more then get a car"
    },
    {
      sno: 3,
      title: "Get PR",
      description: "Get Better job and get PR"
    }
  ]
  return (
    <>
    <Header title="My Todos List" searchBar={false}/> 
    <Todos todos={todos}/>
    <Footer/>
    </>
  );
}

export default App;
