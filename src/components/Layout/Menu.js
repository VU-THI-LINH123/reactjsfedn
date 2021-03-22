
import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class Menu extends Component{ 
  render() {
   const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Hot Deals',
        to: '/hotdeals',
          exact: false
    },
    {
        name: 'Categories',
        to: '/categories',
          exact: false
    },
    {
        name: 'Laptops',
        to: '/laptops',
          exact: false
    },
     {
        name: 'Smartphones',
        to: '/smartphones',
          exact: false
    },
     {
        name: 'Cameras',
        to: '/cameras',
          exact: false
    },
     {
        name: 'Accessories',
        to: '/accessories',
          exact: false
    }
     ];
    return(
       <nav id="navigation">
        {/* container */}
        <div className="container">
          {/* responsive-nav */}
          <div id="responsive-nav">
            {/* NAV */}
            <ul className="main-nav nav navbar-nav">
                 {
                  menus.map((menu,index)=>{
                    return  <li key={index}><Link to={menu.to}  className="nav-link"> {menu.name} </Link> </li>;
                  })
                 }
            </ul>
            {/* /NAV */}
          </div>
          {/* /responsive-nav */}
        </div>
        {/* /container */}
      </nav>
         
      );
  }
}
export default Menu;