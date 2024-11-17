import "./index.css";
import ReactDOM from "react-dom/client";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import React from "react";

const router = createMemoryRouter(routes,{
    initialEntries:["/"],
    initialIndex:0,
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <RouterProvider router={router}/>
);
