import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { DefaultLayout } from "./_layout/defaultLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [{path: '/', element: <Home></Home>}]

    }
])