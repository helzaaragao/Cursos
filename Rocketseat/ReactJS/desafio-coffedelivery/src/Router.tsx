import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home/Home";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout></DefaultLayout>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
        </Routes>
    )
}