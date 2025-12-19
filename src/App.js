import "./App.css";

import Test from "./components/Test";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
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
import Faq from "./components/websitePrac/Faq";
import History from "./components/websitePrac/History";
import Api from "./components/websitePrac/Api";
import GetRealNumber from "./components/websitePrac/GetRealNumber";
import MyNumbers from "./components/websitePrac/MyNumbers";
import AutoSaveInput from "./components/NamasteReactInterviewPrep/AutoSaveInput";

const appRouter = createBrowserRouter([
  {
    path: "/memo",
    element: <Memo />,
  },
  {
    path: "/website",
    element: (
      <div className="container mx-auto px-4">
        {" "}
        <MainPage />
      </div>
    ),
    children: [
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "numbers",
        element: <MyNumbers />,
      },
      {
        path: "real",
        element: <GetRealNumber />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "api",
        element: <Api />,
      },
    ],
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
  // Namaste React Interview Prac
  {
    path: "/autosaveinput",
    element: <AutoSaveInput />,
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
