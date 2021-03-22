
import React,{Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
class Hanghot  extends Component{

  render() {
      const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
      <div>
         <div className="product">
        <div className="product-img">
          <img src="./img/product02.png" alt="" />
          <div className="product-label">
            <span className="new">NEW</span>
          </div>
        </div>
        <div className="product-body">
          <p className="product-category">Category</p>
          <h3 className="product-name"><a href="#">product name goes here</a></h3>
          <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
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
          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
        </div>
      </div>
      </div>
    ));
    const settings = {
       dots:false,
        slidesToShow:4,
        slidesToScroll:4,
        autoplay:true,
        autoplaySpeed:3000
    }; 
    return(
      
     <div class="container">
     <style>{cssstyle}</style>
       <Slider {...settings}>
        {renderSlides()}
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
export default Hanghot;