import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodosList = ({ todosProps }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.arrayOf(
    PropTypes.shape.isRequired,
  ).isRequired,
}
export default TodosList;
