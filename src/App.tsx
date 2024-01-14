import {
  Navigate,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/Index";
import Board from "./pages/Project/Board/Index";
import ProjectPage from "./pages/Project/Index";
import Setting from "./pages/Project/Setting/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "project",
        element: <ProjectPage />,
        children: [
          {
            index: true,
            element: <Navigate to="board" replace />,
          },
          {
            path: "board",
            element: <Board />,
          },
          {
            path: "setting",
            element: <Setting />,
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to="project/board" replace />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
