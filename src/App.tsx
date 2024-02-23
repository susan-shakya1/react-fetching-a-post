import "./App.css";
import { Navbar } from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { PostDetail } from "./components/postdetail";
import { Postlist } from "./components/Postlist";
import { TodoList } from "./components/Todolist";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Postlist />,
      },
      {
        path: "/posts",
        element: <Postlist />,
      },
      {
        path: "/posts/:postId",
        element: <PostDetail />,
      },
    ],
  },
  {
    path: "/todos",
    element: <TodoList />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
