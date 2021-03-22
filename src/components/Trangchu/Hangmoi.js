
import React,{Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
class Hangmoi  extends Component{
   
  addcart=(id,cart)=>{
    console.log("addcart");
     
     this.props.addcart(id,cart);
  }

  render() {
    // var {hangmoi}=this.state;
   var {hangmoi}=this.props;
   // console.log(hangmoi);
  
    var mang=hangmoi.map((num,index )=> {
    return (
      <div key={index}>
     
       <div className="product">
        <div className="product-img">
          <img src="jj"alt="" />
          <div className="product-label">
            <span className="new">NEW</span>
          </div>
        </div>
        <div className="product-body">
          <p className="product-category">Category</p>
          <h3 className="product-name"><a href="#">{num.name}</a></h3>
          <h4 className="product-price">${num.giaban}<del className="product-old-price">$990.00</del></h4>
          <div className="product-rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-o" />
          </div>
          <div className="product-btns">
            <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
            <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
          </div>
        </div>
        <div className="add-to-cart">
          <button className="add-to-cart-btn" onClick={()=>this.addcart(num.id,1)}><i className="fa fa-shopping-cart" /> add to cart</button>
        </div>
      </div>
    </div>
    )
    });
    const settings = {
       dots:false,
        slidesToShow:2,
        slidesToScroll:2,
        autoplay:true,
        autoplaySpeed:3000
    }; 
    return(
      
     <div class="container">
     <style>{cssstyle}</style>
       <Slider {...settings}>
        {mang}
      </Slider>
    </div>
    
      );
  }
}
const cssstyle = `
.product {
    margin: 10px;
    margin-bottom:60px;
    position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`
export default Hangmoi;