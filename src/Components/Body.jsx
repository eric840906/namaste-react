import { useEffect, useState } from "react"
import { restaurantArr } from "../constants"
import { RestaurantCard } from "./RestaurantCard"
export const Body = () => {
  const [search, setSearch] = useState('')
  const [restaurants, setRestaurants] = useState(restaurantArr)
  const onSearchInputChange = ({ target: { value } }) => setSearch(value)
  useEffect(() => {
    const filteredRestaurants = restaurantArr.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    setRestaurants(filteredRestaurants)
  }, [search])
  return (
    <>
      <div className="search-container">
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
          <RestaurantCard restaurantObject={item} key={item.id} />
        ))}
      </div>
    </>
  )
}
