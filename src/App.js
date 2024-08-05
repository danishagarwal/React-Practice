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
import ReducerHook from "./components/hooks/ReducerHook";
import EffectHook from "./components/hooks/EffectHook";
import ContextHook from "./components/hooks/ContextHook";
import TodoList from "./components/TodoList";
const appRouter = createBrowserRouter([
  {
    path: "/memo",
    element: <Memo />,
  },
  {
    path: "/useeffect",
    element: <EffectHook />,
  },
  {
    path: "/usestate",
    element: <StateHook />,
  },
  {
    path: "/usereducer",
    element: <ReducerHook />,
  },
  {
    path: "/usecontext",
    element: <ContextHook />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/todolist",
    element: <TodoList />,
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
