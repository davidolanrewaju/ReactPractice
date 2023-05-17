import TodoItem from './TodoItem';
const TodosList = ({ todosProps }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem itemProp={todo} />
    ))}
  </ul>
);
export default TodosList;
