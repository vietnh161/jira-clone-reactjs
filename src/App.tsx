import {
  Navigate,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import "./App.scss";
import MainLayout from "./layout";
import ProjectPage from "./pages/Project";
import Board from "./pages/Project/Board";
import Setting from "./pages/Project/Setting";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Navigate to="project" replace />,
      },
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
