
import React,{Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
class Hanggiamgia  extends Component{
 

  render() {
      const renderSlides = () =>
    [1, 2, 3, 4].map(num => (
                  <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product02.png" alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
    ));
   const settings = {
      className: "center",
      slidesToScroll:1,
      autoplay:true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesToShow:1
    };

    return(
      
          
            
            <div className="col-md-3 col-xs-6">
              <div className="section-title">
                <h4 className="title">Top selling</h4>
                <div className="section-nav">
                  <div id="slick-nav-5" className="products-slick-nav" />
                </div>
              </div>
              <div className="products-widget-slick" data-nav="#slick-nav-5">
                <div>
                   <Slider {...settings}>
                   {renderSlides()}
                   </Slider>
                </div>
              </div>
            </div>
          
         
      );
  }
}

export default Hanggiamgia;