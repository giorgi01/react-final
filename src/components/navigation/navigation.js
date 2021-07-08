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
            to="/"
            exact
            activeClassName="active bg-homePage">
             მთავარი
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/expenses"
            activeClassName="active bg-expensesPage">
            ფინანსური მენეჯერი
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/about"
            activeClassName="active bg-aboutPage ">
            შესახებ
          </NavLink>
        </li>
        <li className="nav-item">
          <button className="nav-link" to="/" onClick={removeToken}>
            გამოსვლა
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
