import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/header";

export function DefaultLayout(){
    return(
        <>
          <Header></Header>
          <Outlet></Outlet>
        </>
    )
}