import { useRef, useState } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodoList";
import { useOnClickOutside } from "./OnClickOutside";

const TodosLogic = () => {
  const [openList, setOpenList] = useState(false);
  const refItem = useRef();
  const todos = [
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ];
  useOnClickOutside(refItem, openList, () => setOpenList(false));
  return (
    <div ref={refItem}>
      <button onClick={() => setOpenList((prev) => !prev)}>Open List</button>
      {openList && (
        <div>
          <span onClick={() => setOpenList(false)}>X</span>
          <InputTodo />
          <TodosList todosProps={todos} />
        </div>
      )}
    </div>
  );
};
export default TodosLogic;
