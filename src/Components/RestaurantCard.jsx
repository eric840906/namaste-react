import { IMG_CDN_URL } from "../constants"
export const RestaurantCard = ({ restaurantObject }) => {
  return (
    <div className='restaurant-card' key={restaurantObject.data.id}>
      <img className='restaurant-image' src={`${IMG_CDN_URL}${restaurantObject.data.cloudinaryImageId}`} />
      <h4>{restaurantObject.data.name}</h4>
      <span>{restaurantObject.data.tags.join(', ')}</span>
      <div>{restaurantObject.data.avgRating}stars</div>
    </div>
  )
}