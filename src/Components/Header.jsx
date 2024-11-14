import plusIcons from "../../public/images/plus.png";
import doubleClick from "../../public/images/double-tick.png";
import notes from "../../public/images/notes.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { added, allCompleted, clearCompleted } from "../redux/todos/actions";
export default function Header() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handelInput = (e) => {
    setInput(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };

  const handelCompleteTask = () => {
    dispatch(allCompleted());
  };
  const handelClearTask = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form
        onSubmit={handelSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handelInput}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusIcons}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={doubleClick} alt="Complete" />
          <span onClick={handelCompleteTask}>Complete All Tasks</span>
        </li>
        <li onClick={handelClearTask} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
}
