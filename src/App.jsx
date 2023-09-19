import './App.css'
import Header from './components/Header'
import TodosLogic from './components/TodoLogics'

function App() {

  return (
    <div className='todo-wrapper'>
      <Header />
      <TodosLogic />
    </div>
  )
}

export default App
