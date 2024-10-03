import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import SingleProjects from "./SingleProjects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "singleprojects",
    element: <SingleProjects/>,
  },
]);


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
