const Title = ({ text }) => <h2>{text}</h2>

export const Header = () => (
  <div className='header'>
    <Title text='title' />
    <div className='nav-items'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
)
