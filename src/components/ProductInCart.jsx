import { useDispatch } from "react-redux";
import deleteIcon from "../assets/icon-delete.svg";
import { reset } from "../Reducers/QuantitySlice";

export default function ProductInCart({quantity}) {

    const dispatch = useDispatch();
    const onDelete = () =>{
        dispatch(reset())
    }

  return (
    <>
      <div className="basket-product">
        <img
          width={64}
          className="product-thumbnail"
          src="/images/image-product-1-thumbnail.jpg"
        ></img>
        <div className="production-info">
          <h4 className="product-name">Fall Limited Edition Sneakers</h4>
          <p className="basket-product-price">
            $125.00 x {quantity} <b>${(125.0 * quantity).toFixed(2)}</b>
          </p>
        </div>
        <button className="product-delete-btn" onClick={onDelete}>
          <img src={deleteIcon}></img>
        </button>
      </div>
      <button className="btn primary-btn">Checkout</button>
    </>
  );
}
