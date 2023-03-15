import { Outlet } from "react-router-dom";
import Nav from "@renderer/layout/Nav"
import WidgetProvider from "@renderer/context/WidgetProvider";

function Root(): JSX.Element {
  return (
    <WidgetProvider>
      <Nav />
      <div className="absolute left-72 p-6 w-4/6 h-screen overflow-scroll">
        <Outlet />
      </div>
    </WidgetProvider >
  )
}

export default Root; 
