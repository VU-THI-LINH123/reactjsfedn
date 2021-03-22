
import React,{Component} from 'react';
import Hangmoi from './Hangmoi';
import HangHot from './HangHot';
import Hanggiamgia from './Hanggiamgia';
import axios from 'axios';
class Trangchu  extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cart:[],
      cartitem:{},
      pageIndex:0,
      pageSize:5,
      keyword:"laptop",
      hangmoi:[]
    };
  }
  laptop=()=>{
      this.setState({keyword:"laptop"});
  
console.log(this.state.keyword);
    axios.post(`http://localhost:8080/api/sanpham/searchByPage`,{
      ...this.state,
    })
      .then(res => {
    this.setState({ hangmoi: res.data.content });
      })
  }
  dienthoai=()=>{
   console.log("dienthoai");
      this.setState({keyword:"dienthoai"});
     axios.post(`http://localhost:8080/api/sanpham/searchByPage`,{
      ...this.state,
     })
      .then(res => {
      this.setState({ hangmoi: res.data.content });
      })
  }
  mayanh=()=>{
   console.log("mayanh");
    this.setState({keyword:"mayanh"});
    axios.post(`http://localhost:8080/api/sanpham/searchByPage`,{
      ...this.state,
    })
      .then(res => {
      this.setState({ hangmoi: res.data.content });
      })
  }
     addcart=(id,sl)=>{
       axios.get((`http://localhost:8080/api/sanpham/add/${id}/${sl}`))
      .then(res => {
           console.log(res.data,123)
      })    

     }
    componentDidMount() {
   const user ={
    ...this.state,
   }
    axios.post(`http://localhost:8080/api/sanpham/searchByPage`, user)
      .then(res => {
      this.setState({ hangmoi: res.data.content });
      })
     
    } 
    render() {
   var {hangmoi}=this.state;
   // console.log(hangmoi);
    return(
       <div>
          <div className="section">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            {/* shop */}
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src="./img/shop01.png" alt="" />
                </div>
                <div className="shop-body">
                  <h3>Laptop<br />Collection</h3>
                  <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right" /></a>
                </div>
              </div>
            </div>
            {/* /shop */}
            {/* shop */}
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src="./img/shop03.png" alt="" />
                </div>
                <div className="shop-body">
                  <h3>Accessories<br />Collection</h3>
                  <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right" /></a>
                </div>
              </div>
            </div>
            {/* /shop */}
            {/* shop */}
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src="./img/shop02.png" alt="" />
                </div>
                <div className="shop-body">
                  <h3>Cameras<br />Collection</h3>
                  <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right" /></a>
                </div>
              </div>
            </div>
            {/* /shop */}
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
     <div className="section">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
           {/* section title */}
      <div className="col-md-12">
        <div className="section-title">
          <h3 className="title">New Products</h3>
          <div className="section-nav">
            <ul className="section-tab-nav tab-nav">
              <li className="active" onClick={()=> this.laptop()}><a data-toggle="tab" >Laptops</a></li>
              <li onClick={()=> this.dienthoai()}><a data-toggle="tab">Smartphones</a></li>
              <li onClick={()=> this.mayanh()}><a data-toggle="tab" >Cameras</a></li>
              <li><a data-toggle="tab" href="#">Accessories</a></li>
            </ul>
          </div>
        </div>
      </div>
          </div>
        {/*/ row */}
        </div>

      </div>
      <Hangmoi hangmoi={hangmoi} addcart={this.addcart}/>
         <div id="hot-deal" className="section">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-md-12">
              <div className="hot-deal">
                <ul className="hot-deal-countdown">
                  <li>
                    <div>
                      <h3>02</h3>
                      <span>Days</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>10</h3>
                      <span>Hours</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>34</h3>
                      <span>Mins</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>60</h3>
                      <span>Secs</span>
                    </div>
                  </li>
                </ul>
                <h2 className="text-uppercase">hot deal this week</h2>
                <p>New Collection Up to 50% OFF</p>
                <a className="primary-btn cta-btn" href="#">Shop now</a>
              </div>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
        <div className="section">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
           {/* section title */}
        <div className="col-md-12">
        <div className="section-title">
          <h3 className="title">Top selling</h3>
          <div className="section-nav">
            <ul className="section-tab-nav tab-nav">
              <li className="active"><a data-toggle="tab" href="#tab2">Laptops</a></li>
              <li><a data-toggle="tab" href="#tab2" >Smartphones</a></li>
              <li><a data-toggle="tab" href="#tab2">Cameras</a></li>
              <li><a data-toggle="tab" href="#tab2">Accessories</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* /section title */}
 
         </div>
        
        </div>
         {/* row */}
       </div>
    
       <div className="section">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
    <Hanggiamgia/>
    <Hanggiamgia/>
    <Hanggiamgia/>
    <Hanggiamgia/>
     </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
       </div>
         
      );
  }
}
export default Trangchu ;