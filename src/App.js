
import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Todos } from './Components/Todos';

function App() {
const handleDelete = (todo)=> {
  console.log('delete',todo)
}

  let todos = [
    {
      sno: 1,
      title: "Get Better Job",
      description: "for getting better job, work hard and learn new skills"
    },
    {
      sno: 2,
      title: "Get car",
      description: "to get a cae get a better job"
    },
    {
      sno: 3,
      title: "Get house",
      description: "to buy a new house, get more money"
    }
  ]
  return (
    <>
    <Header title="My Todos List" searchBar={false}/> 
    <Todos todos={todos} handleDelete={handleDelete}/>
    <Footer/>
    </>
  );
}

export default App;
