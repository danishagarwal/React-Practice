import logo from "./logo.svg";
import "./App.css";
import Memo from "./components/Memo";
import Test from "./components/Test";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/memo",
    element: <Memo />,
  },
  {
    path: "/",
    element: <Test></Test>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
}

export default App;
