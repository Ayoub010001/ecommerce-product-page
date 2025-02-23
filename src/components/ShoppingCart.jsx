import { useSelector } from 'react-redux'
import cartIcon from '../assets/icon-cart.svg'
import { stateSelector } from "../Selectors/QuantitySelector"


function myCart(){

}


function ShoppingCart({setToggleCart}) {

  const quantityObj = useSelector(stateSelector);
  const {isAddedToCart,value} = quantityObj.quantity;

  return (
    <div className='cart-box' onClick={()=> {
      setToggleCart((prevState)=>{
          return !prevState;
      })
      }}>
        <img src={cartIcon} width={24} height={24}></img>
        {(isAddedToCart===true && value > 0)&& <span className='badge-cart'>{value}</span>}
    </div>
  )
}

export default ShoppingCart