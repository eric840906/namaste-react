export const RestaurantCard = ({ restaurantObject }) => {
  return (
    <div className='restaurant-card' key={restaurantObject.id}>
      <img className='restaurant-image' src={restaurantObject.image} />
      <h4>{restaurantObject.name}</h4>
      <span>{restaurantObject.tag.join(', ')}</span>
      <div>{restaurantObject.rating}stars</div>
    </div>
  )
}