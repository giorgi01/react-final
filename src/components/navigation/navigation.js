import { NavLink } from 'react-router-dom';
import removeToken from '../token/removeToken';

import './styles.css';

function Navigation() {
  return (
    <div className="row mt-4 mb-4">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/expenses"
            activeClassName="active bg-expensesPage">
            Expenses manager
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/about"
            activeClassName="active bg-aboutPage ">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/" onClick={removeToken}>
            Log out
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
