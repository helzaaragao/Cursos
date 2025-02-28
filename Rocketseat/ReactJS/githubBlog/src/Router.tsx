import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home.tsx";
import { DefaultLayout } from "./_layout/defaultLayout";
import { PostsDetails } from "./components/PostsDetails/index.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [{path: '/', element: <Home></Home>}, 
            {path: '/details', element: <PostsDetails></PostsDetails>}
        ]

    }
])