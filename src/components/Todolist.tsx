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
  const [IsModelOpen, setIsModelOpen] = useState(false);
  const [selectId, setSelectId] = useState(null);

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
  // write a code for deleting a content from a UI
  const handleDelete = (id: number) => {
    const filterId = todos.filter((todo) => todo.id !== id);
    setTodos(filterId);
  };

  const Selecttodos = todos.find((todo) => todo.id === selectId);

  return (
    <div>
      {/* diplaying the output in UI */}
      <table
        style={{
          width: "80%",
          margin: "0 auto",
          zIndex: "-20",
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
                      color: "#ff7f7f",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      handleDelete(todo.id);
                    }}
                    className="deletebtn"
                  />
                  <FaEdit
                    onClick={() => {
                      setIsModelOpen(true);

                      setSelectId(todo.id);
                    }}
                    className="editbtn"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {IsModelOpen ? (
        <div className="modelopen">
          <div className="stylesmodel">
            <div className="tablestyle">
              {" "}
              <h2
                style={{
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                Todo Model
              </h2>
              <label
                htmlFor=""
                style={{
                  margin: "10px 0 0 0",
                }}
              >
                Id:
              </label>
              <input
                type="text"
                style={{
                  padding: "5px",
                }}
                value={Selecttodos?.id}
              />
              <label htmlFor="">Title:</label>
              <textarea
                name="title"
                id=""
                cols="10"
                rows="5"
                value={Selecttodos?.title}
                onChange={(e) => {
                  console.log("this is the onchange value", e.target.value);
                }}
              ></textarea>
              <button
                onClick={() => {
                  setIsModelOpen(false);
                }}
                className="btn"
              >
                Close
              </button>
              <div
                style={{
                  marginTop: "5px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <label htmlFor="">Completed</label>
                <input
                  type="checkbox"
                  defaultChecked={Selecttodos?.completed}
                />
              </div>
              <div className="updatebtn">
                <button>Update</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
