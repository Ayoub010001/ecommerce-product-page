import { useDispatch } from "react-redux"
import cartIcon from "../assets/icon-cart.svg"
import { addToCart } from "../Reducers/QuantitySlice";

export default function AddToCartBtn() {

  const dispatch = useDispatch();

  return (
    <button className="btn primary-btn" onClick={()=>{dispatch(addToCart())}}>
            <img src={cartIcon} className="icon-dark"></img>
            <p>Add to cart</p>
    </button>
  )
}
