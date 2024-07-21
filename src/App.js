import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import CustomError from "./components/CustomError";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";


const Grocery = React.lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  // const [userName,setUserName]=useState("");
  // useEffect(()=>{
  //   //making an api call
  //   setUserName("sahith");
  // },[])
  return (
   
    <div className="app-container">
        <Header />
        <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <CustomError />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
