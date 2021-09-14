import "./sidebar.css";
import {
  LineStyle,
  People,
  Storefront,
  ShoppingBasket,
  BarChart,
  AttachMoney,
  StorageOutlined,
  SupervisorAccount,
  RestaurantMenu,
  MoneyOff,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/employees" className="link">
              <li className="sidebarListItem">
                <People className="sidebarIcon" />
                Employees
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <RestaurantMenu className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <ShoppingBasket className="sidebarIcon" />
              Orders
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MoneyOff className="sidebarIcon" />
              Expenses
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Salary
            </li>
            <li className="sidebarListItem">
              <StorageOutlined className="sidebarIcon" />
              Stock
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Admin</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <SupervisorAccount className="sidebarIcon" />
              Manage Users
            </li>
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Manage Products
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
