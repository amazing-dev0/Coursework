import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Main">Main</Link>
          </li>
          <li>
            <Link to="/History">History</Link>
          </li>
          <li>
            <Link to="/Info">Info</Link>
          </li>
          <li>
            <Link to="/Goals">Goals</Link>
          </li>
          <li>
            <Link to="/Data">Data</Link>
          </li>
          <li>
            <Link to="/Weather">Weather</Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;