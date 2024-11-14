import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filters/actions";

export default function Footer() {
  /**
   * selector
   */
  const todos = useSelector((state) => state.todos);
  const filterTodo = useSelector((state) => state.filtersTodo);
  /**
   * Dispatch
   */
  const dispatch = useDispatch();
  /**
   * Handler
   */
  const handelStatusChanged = (status) => {
    dispatch(statusChanged(status));
  };

  const handelColorChanged = (color) => {
    if (filterTodo.colors.includes(color)) {
      dispatch(colorChanged(color, "remove"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };

  /**
   * Filter TodoTask
   */
  const findTodosTask = todos.filter((todo) => !todo.completed);
  const todosTask = (todos) => {
    switch (true) {
      case todos.length === 0:
        return "No Task left";
      case todos.length === 1:
        return "1 Task left";
      default:
        return `${todos.length} tasks left`;
    }
  };

  return (
    <>
      <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>{todosTask(findTodosTask)}</p>
        <ul className="flex space-x-1 items-center text-xs">
          <li
            onClick={() => handelStatusChanged("All")}
            className={`cursor-pointer ${
              filterTodo.status === "All" && "font-bold"
            }`}
          >
            All
          </li>
          <li>|</li>
          <li
            onClick={() => handelStatusChanged("Incomplete")}
            className={`cursor-pointer ${
              filterTodo.status === "Incomplete" && "font-bold"
            }`}
          >
            Incomplete
          </li>
          <li>|</li>
          <li
            onClick={() => handelStatusChanged("Complete")}
            className={`cursor-pointer ${
              filterTodo.status === "Complete" && "font-bold"
            }`}
          >
            Complete
          </li>
          <li></li>
          <li></li>
          <li
            onClick={() => handelColorChanged("green")}
            className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
              filterTodo.colors.includes("green") && "bg-green-500"
            }`}
          ></li>
          <li
            onClick={() => handelColorChanged("red")}
            className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
              filterTodo.colors.includes("red") && "bg-red-500"
            }`}
          ></li>
          <li
            onClick={() => handelColorChanged("yellow")}
            className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
              filterTodo.colors.includes("yellow") && "bg-yellow-500"
            }`}
          ></li>
        </ul>
      </div>
    </>
  );
}
