import { useState } from "react";
import ProductThumbnails from "./ProductThumbnails";

function ProductImages() {

  const productImagesList = [
    "image-product-1", "image-product-2","image-product-3","image-product-4"
  ]

  const [currentImg,setCurrentImg] = useState("image-product-1")

  return (
    <section className="images-section">
      <img
        className="product-image"
        src={`/images/${currentImg}.jpg`}
        width={445}
        height={445}
      ></img>
      <ProductThumbnails ImagesList={productImagesList} currentImg={currentImg} setCurrentImg={setCurrentImg}/>
    </section>
  );
}

export default ProductImages;
