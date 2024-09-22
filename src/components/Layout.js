import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Layout = ({ handleClick, isDarkMode }) => {
  return (
    <div className=".App">
        <Nav 
          handleClick={handleClick}
          isDarkMode={isDarkMode}
        />
        <Outlet />
    </div>
  )
}

export default Layout