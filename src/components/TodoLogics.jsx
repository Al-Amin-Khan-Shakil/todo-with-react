import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./InputTodo";
import TodosList from "./TodoList";
import { useOnClickOutside } from "./OnClickOutside";

const TodosLogic = () => {
  const [openList, setOpenList] = useState(false);
  const refItem = useRef();
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    );
  }

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo]);
  }

  useOnClickOutside(refItem, openList, () => setOpenList(false));
  return (
    <div ref={refItem}>
      <button onClick={() => setOpenList((prev) => !prev)}>Open List</button>
      {openList && (
        <div>
          <span onClick={() => setOpenList(false)}>X</span>
          <InputTodo addTodoItem={addTodoItem} />
          <TodosList
            todosProps={todos}
            handleChange={handleChange}
            delTodo={delTodo}
          />
        </div>
      )}
    </div>
  );
};
export default TodosLogic;
