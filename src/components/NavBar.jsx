import Navigation from './Navigation'
import ShoppingCart from './ShoppingCart'
import Profile from './Profile'
import DropDownCart from './DropDownCart'
import { useState } from 'react'


function NavBar() {
  const [toggleCart, setToggleCart] = useState(false)
  return (
    <nav>
        <Navigation />
        <div className='cart-section'>
                <ShoppingCart setToggleCart={setToggleCart}/>
                <Profile />
                <DropDownCart toggleCart={toggleCart}/>
        </div>
    </nav>
  )
}

export default NavBar