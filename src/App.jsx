import './App.css'
import Header from './components/Header'
import TodosLogic from './components/TodoLogics'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='todo-wrapper'>
      <Navbar />
      <Header />
      <TodosLogic />
    </div>
  )
}

export default App
