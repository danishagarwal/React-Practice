import "./App.css";
import Memo from "./components/Memo";
import Test from "./components/Test";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Ref from "./components/Ref";
import Search from "./components/Search";
import Counter from "./components/Counter";

const appRouter = createBrowserRouter([
  {
    path: "/memo",
    element: <Memo />,
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
