import React from 'react';
import './business.css';

let business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

class Business extends React.Component {
  render(){
    return (
      <div className="Business">
  <div className="image-container">
    <{business.thisImageSrc}alt=''/>
  </div>
  <h2>{business.thisName}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{business.thisAdress}</p>
      <p>{business.thisCity}</p>
      <p>{business.thisState, business.thisZipCode}</p>
    </div>
    <div className="Business-reviews">
      <h3>{business.thisCategory}</h3>
      <h3 className="rating">{business.thisRating}</h3>
      <p>business.thisReviewCount</p>
    </div>
  </div>
</div>
    );

  }
}

export default Business;
