import { useEffect, useState } from "react";
import "../index.css";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

export function TodoList() {
  const [todos, setTodos] = useState<
    {
      id: number;
      title: string;
      completed: boolean;
    }[]
  >([]);

  useEffect(() => {
    const handleApi = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log("the fetch data", data);
      console.log("the fetching its key value", Object.keys(data[0]));
      setTodos(data);
    };
    handleApi();
  }, []);

  return (
    <div>
      {/* diplaying the output in UI */}
      <table
        style={{
          width: "80%",
          margin: "0 auto",
        }}
      >
        <thead>
          <th>User Id </th>
          <th>Title</th>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td className="flex">
                {todo.title}
                <div>
                  {" "}
                  <FaTrashCanArrowUp
                    style={{
                      margin: "0 10px",
                      color: "red",
                    }}
                    onClick={() => {}}
                  />
                  <FaEdit />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
