import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const routes = [{ path: "/weather/", element: <MainPage /> }];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
