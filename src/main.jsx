import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route } from "react-router-dom";
import About from "./components/About.jsx";
import Contactus from "./components/Contactus.jsx";
import App from "./App.jsx";
import RestaurantCointainer from "./components/RestaurantCointainer.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Resmenu from "./components/Resmenu.jsx";
import Cart from "./components/Cart.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<RestaurantCointainer />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contactus />} />
      <Route path="restaurants/:id" element={<Resmenu />}></Route>
      <Route path="cart" element={<Cart />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
