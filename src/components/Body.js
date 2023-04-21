import Shimmer from '../Shimmer';
import data from './../../swiggy_api_response.json'
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';


// let filteredRestaurants = data;
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const filterData = (s) => {
    const searchData = allRestaurants.filter((res) => 
    res?.data?.name?.toLowerCase().includes(s.toLowerCase()));
    return searchData;
  }
  useEffect(() => {
    //API CALLS
   getRestaurants();
    console.log("in useEffect");
  }, [])

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
      );
   
    const jsonData = await data.json();
    
    console.log(jsonData);
     setAllRestaurants(jsonData.data.cards[2].data.data.cards);
     setfilteredRestaurants(jsonData.data.cards[2].data.data.cards);
  }

    return (filteredRestaurants.length === 0) ? <Shimmer /> :  ( 
      <div className="body">
        <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={search}
        onChange={(e) => {setSearch(e.target.value)}}
       />
 
       <button 
        className='search-btn'
        onClick={() => {
          const filteredData = filterData(search, filteredRestaurants);
          setfilteredRestaurants(filteredData);
        }}
        >
        Search
        </button>
        <button 
        className='filter-btn'
        onClick={() => {
          const filteredData = filteredRestaurants.filter(res => res.data.avgRating > 4);
          setfilteredRestaurants(filteredData);
        }}
        >
        Top Rated Restaurants
        </button>
        <div className="res-container">
   
          {
            filteredRestaurants.map((resObject) => {
              return (<RestaurantCard key={resObject.data.id} resData={resObject} />)
            })
          }
        </div>
      </div>
    );
  };

  export default Body;