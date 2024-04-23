import React from "react";
import ReactDOM from "react-dom/client";
import Routs from "./Routs/Routs";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Register from "./Register/Register";
// import Home from "./Home/Home";
// import Login from "./Login/Login";
// import Register from "./Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routs></Routs>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },

    ]
   
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
