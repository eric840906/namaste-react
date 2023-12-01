import { useEffect, useState } from "react"
import { restaurantArr } from "../constants"
import { restaurantList } from "../mockData"
import { RestaurantCard } from "./RestaurantCard"
export const Body = () => {
  const [search, setSearch] = useState('')
  const [restaurants, setRestaurants] = useState(restaurantList)
  const onSearchInputChange = ({ target: { value } }) => setSearch(value)
  const filterTopRating = () => {
    setRestaurants(() => restaurantList.filter(restaurant => restaurant.data.avgRating > 4))
  }
  // useEffect(() => {
  //   const filteredRestaurants = restaurantList.filter(item => item.data.name.toLowerCase().includes(search.toLowerCase()))
  //   setRestaurants(filteredRestaurants)
  // }, [search])
  return (
    <>
      <div className="search-container">
        <button onClick={filterTopRating}>high rates</button>
        <input type="text" placeholder="search" value={search} onChange={onSearchInputChange} />
        <button className="search-btn">search</button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap'
        }}
      >
        {restaurants.map(item => (
          <RestaurantCard restaurantObject={item} key={item.data.id} />
        ))}
      </div>
    </>
  )
}
