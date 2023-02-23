import { Outlet } from "react-router-dom";
import Nav from "./layout/Nav"

function Root(): JSX.Element {
  return (
    <>
      <Nav />
      <div className="absolute left-72 p-6 text-white">
        <Outlet />
      </div>
    </>
  )
}

export default Root; 
