
import { Header } from './components/Header';
import './App.css';
import { TaskList } from './components/TaskList';

function App() {

  const info = "Random";

  return (
    <div className="App">
      <Header />
      <TaskList info={info} />
    </div>
  );
}

export default App;
