function ProductThumbnails({ ImagesList,currentImg,setCurrentImg }) {
  return (
    <div className="product-thumb-container">
      {ImagesList.map((img,index) => {
        return (
          <div className={currentImg===img?`border-thumb-active`:`border-thumb`}>
              <img
                key={index}
                src={`/images/${img}-thumbnail.jpg`}
                className={currentImg===img?
                  `product-selected product-image-thumbnail`:
                  `product-image-thumbnail`
                }
                width={88}
                height={88}
                onClick={()=>setCurrentImg(img)}
              ></img>
          </div>
        );
      })}
 
    </div>
  );
}

export default ProductThumbnails;
