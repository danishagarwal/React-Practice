import "./App.css";
import Memo from "./components/Memo";
import Test from "./components/Test";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Ref from "./components/Ref";
import Search from "./components/Search";
import Counter from "./components/Counter";
import Login from "./components/Login";
import List from "./components/List";
import TipCalc from "./components/TipCalc";
import StateHook from "./components/hooks/StateHook";

const appRouter = createBrowserRouter([
  {
    path: "/memo",
    element: <Memo />,
  },
  {
    path: "/usestate",
    element: <StateHook />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/ref",
    element: <Ref />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/list",
    element: <List></List>,
  },
  {
    path: "/",
    element: <Test></Test>,
  },
  {
    path: "/tip",
    element: <TipCalc />,
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
