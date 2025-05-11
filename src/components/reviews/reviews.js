import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  margin: 0,
  height: '270px',
  color: '#3b3634',
  lineHeight: '250px',
  textAlign: 'center',
  background: 'rgba(192,188,168,0.2)',
  border: '2px solid #756B64FF',
};

const Reviews = () => (
  <div className="divBlockStyle">
    <h2 className="h2style" id="reviewsID">Отзывы</h2>
    <Carousel arrows infinite={true}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  </div>
);
export default Reviews;