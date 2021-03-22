
import React,{Component} from 'react';
import SPtuongtu from './SPtuongtu';
import TimhSp from './TimhSp';
class Carts  extends Component{
  
  render() {
   
    return(
     <div>
       <div id="breadcrumb" className="section">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumb-tree">
                <li><a href="#">Home</a></li>
                <li><a href="#">All Categories</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Headphones</a></li>
                <li className="active">Product name goes here</li>
              </ul>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>

    {/* Section */}
    <TimhSp/>
    {/* /Section */}
    {/* Section */}
     <SPtuongtu/>
    {/* /Section */}
     </div>
      );
  }
}
export default Carts;