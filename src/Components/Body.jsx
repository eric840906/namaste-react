const restaurantArr = [
  {
    name: 'McDonald',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rhth4hh-1653889912.jpg?crop=0.487xw:0.974xh;0.00163xw,0.0163xh&resize=640:*',
    tag: ['American', 'Fast food'],
    rating: 4.2,
    id: 1
  },
  {
    name: 'Sukiya',
    image:
      'https://media.gq.com.tw/photos/5dbccd2f2551d400086aa4d8/master/w_1600%2Cc_limit/2014050744019893.jpg',
    tag: ['Japanese', 'Donburi'],
    rating: 4,
    id: 2
  },
  {
    name: 'Burger king',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/17/3b/9a/d2/burger-king.jpg',
    tag: ['American', 'Fast food'],
    rating: 3,
    id: 3
  },
  {
    name: 'McDonald',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rhth4hh-1653889912.jpg?crop=0.487xw:0.974xh;0.00163xw,0.0163xh&resize=640:*',
    tag: ['American', 'Fast food'],
    rating: 4.2,
    id: 4
  },
  {
    name: 'Sukiya',
    image:
      'https://media.gq.com.tw/photos/5dbccd2f2551d400086aa4d8/master/w_1600%2Cc_limit/2014050744019893.jpg',
    tag: ['Japanese', 'Donburi'],
    rating: 4,
    id: 5
  },
  {
    name: 'Burger king',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/17/3b/9a/d2/burger-king.jpg',
    tag: ['American', 'Fast food'],
    rating: 3,
    id: 6
  }
]

const RestaurantCard = ({ restaurantObject }) => {
  return (
    <div className='restaurant-card' key={restaurantObject.id}>
      <img className='restaurant-image' src={restaurantObject.image} />
      <h4>{restaurantObject.name}</h4>
      <span>{restaurantObject.tag.join(', ')}</span>
      <div>{restaurantObject.rating}stars</div>
    </div>
  )
}
export const Body = () => (
  <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
      }}
    >
      {restaurantArr.map(item => (
        <RestaurantCard restaurantObject={item} key={item.id} />
      ))}
    </div>
  </>
)
