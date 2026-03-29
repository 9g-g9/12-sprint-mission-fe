import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const ProductsItem = (props) => {
  const { product } = props;
  return (
    <>
      <img src={product.images[0]} alt={product.name} />
      <div className="product-i-desc">
        <p className="product-i-title">{product.name}</p>
        <p className="product-i-price">
          {product.price.toLocaleString("ko-KR")}원
        </p>
        <div className="product-i-fcount">
          <span className="heart">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span className="count">{product.favoriteCount}</span>
        </div>
      </div>
    </>
  );
};

export default ProductsItem;
