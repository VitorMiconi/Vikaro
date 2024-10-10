import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./HomePage";
import SingleGolisk from "./SingleGolisk";
import SingleSparo from "./SingleSparo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "golisk",
    element: <SingleGolisk/>,
  },
  {
    path: "sparo",
    element: <SingleSparo/>,
  },
]);


function App() {
  return (

    <RouterProvider router={router}/>

  );
}

export default App;
