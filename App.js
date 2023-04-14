import React from "react";
import ReactDOM from "react-dom/client";
import data from './swiggy_api_response.json'

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = data;

const RestaurantCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="Biryani"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.slice(0, 4).join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>${costForTwo / 1000} FOR TWO</h4>
      <h4>{deliveryTime}minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((resObject) => {
            return (<RestaurantCard key={resObject.data.id} resData={resObject} />)
          })
        }
       
      </div>
    </div>
  );
};

const AppLayoutComponent = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);
