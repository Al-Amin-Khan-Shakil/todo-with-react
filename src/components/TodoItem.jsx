import PropTypes from "prop-types"

const TodoItem = ({ itemProp }) => {
  return <li>{itemProp.title}</li>;
};

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default TodoItem;
