import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./HomePage";
import SingleGolisk from "./SingleGolisk";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "golisk",
    element: <SingleGolisk/>,
  },
]);


function App() {
  return (

    <RouterProvider router={router}/>

  );
}

export default App;
