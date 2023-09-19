import './App.css'
import Header from './components/Header'
import TodosLogic from './components/TodoLogics'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='wrapper'>
      <Navbar />
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  )
}

export default App
