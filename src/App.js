import React from "react";
import Demo from './Demo';
import Header from './components/Layout/Header';
import Menu from './components/Layout/Menu';
import Trangchu from './components/Trangchu/Trangchu';
import MultipleRows from './components/Trangchu/MultipleRows';
import Newsletter from './components/Layout/Newsletter';
import Footed from './components/Layout/Footed';
import {routers} from './router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default function App() {

  return (

    <div className="App">
   <Router>
    <Header/>
    <Menu/>
     <Switch>
            {
               routers.map((router,index)=>{

                    return  <Route key={index}
                   exact={router.exact}
                    path={router.path} 
                    component={router.main}></Route>
               })
         }
      </Switch>
   <Newsletter/>
   <Footed/>
   </Router>
 </div>
    
  );
}
