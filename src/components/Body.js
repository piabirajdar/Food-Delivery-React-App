import data from './../../swiggy_api_response.json'
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';


let resList = data;
const Body = () => {
  const [resList, setResList] = useState(data)
    return (
      <div className="body">
        <button 
        className='filter-btn'
        onClick={() => {
          const filteredData = resList.filter(res => res.data.avgRating > 4);
          setResList(filteredData);
        }}
        >
        Top Rated Restaurants
        </button>
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

  export default Body;