import './App.css';
import Count from './Components/useState/Counter/Counter';
import "bootstrap/dist/css/bootstrap.css"
import Header from './Components/Header/Header';
import ToDoList from './Components/useState/ToDoList/ToDoList'




function App() {
  return (
    <div >
      <Header titulo="Unique-apps-Projets" subtitulo="all the projets in the same app"/>
        <main className='container w-50'>
        <ToDoList/>

        </main>
      
    </div>
  );
}

export default App;
