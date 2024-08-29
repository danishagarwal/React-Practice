import "./App.css";

import Test from "./components/Test";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Ref from "./components/hooks/Ref";
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
import Main from "./components/tictactoe/Main";
import Fetch from "./components/Fetch";
import CounterTimer from "./components/CounterTimer";
import Memo from "./components/hooks/Memo";
import TraceACircle from "./components/TraceACircle";
import MainPage from "./components/websitePrac/MainPage";

const appRouter = createBrowserRouter([
  {
    path: "/memo",
    element: <Memo />,
  },
  {
    path: "/website",
    element: <MainPage />,
  },
  {
    path: "/tracer",
    element: <TraceACircle />,
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
  {
    path: "/tictactoe",
    element: <Main />,
  },
  {
    path: "/fetch",
    element: <Fetch />,
  },
  {
    path: "/counterTimer",
    element: <CounterTimer />,
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
