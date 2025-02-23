import { useSelector } from "react-redux";
import { quantitySelector, stateSelector } from "../Selectors/QuantitySelector";
import ProductInCart from "./ProductInCart";
import EmptyCart from "./EmptyCart";

function DropDownCart({ toggleCart }) {
  // const quantity = useSelector(quantitySelector);
  const quantity = useSelector(quantitySelector);

  return (
    <div className={toggleCart ? "drop-down-cart" : "drop-down-cart hidden"}>
      <h3 className="drop-down-title">Cart</h3>
      <hr className="line-break"></hr>
      <div className="basket-section">
        {quantity > 0 ? <ProductInCart quantity={quantity} /> : <EmptyCart />}
        {/* <div className="basket-product">
          <img
            width={64}
            className="product-thumbnail"
            src="/images/image-product-1-thumbnail.jpg"
          ></img>
          <div className="production-info">
            <h4 className="product-name">Fall Limited Edition Sneakers</h4>
            <p className="basket-product-price">
              $125.00 x {value} <b>${(125.0*value).toFixed(2)}</b>
            </p>
          </div>
          <button className="product-delete-btn">
            <img src={deleteIcon}></img>
          </button>
        </div>
        <button className="btn primary-btn">Checkout</button> */}
      </div>
    </div>
  );
}

export default DropDownCart;
