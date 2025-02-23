import cartIcon from "../assets/icon-cart.svg";

import QuantityButton from "../ui/QuantityButton";
import DiscountBadge from "../ui/DiscountBadge";
import AddToCartBtn from "../ui/AddToCartBtn";


export default function ProductDetails() {
  return (
    <section className="info-section">
      <p className="product-subtitle">SNEAKER COMPANY</p>
      <h1 className="product-title">
        Fall Limited Edition
        <br />
        Sneakers
      </h1>
      <p className="product-description">
        These low-profile sneakers are you perfect casual wear companion,
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="product-price-box">
        <h2 className="product-price">$125.00 </h2>
        <DiscountBadge percentage={50}/>
      </div>
      <p className="dashed-price">
        <s>$250.00</s>
      </p>
      <div className="add-to-cart-section">
        <QuantityButton />
        <div className="add-to-cart-box">
          <AddToCartBtn Icon={cartIcon}/>
        </div>
      </div>
    </section>
  );
}
