import React from "react";
import { useEffect } from "react";

const ResCell = ({ product, i }) => {
  useEffect(() => {
    console.log(product);

    return () => {};
  }, []);

  return (
    <>
      <div className="resCard">
        <img src={product.images[0]} alt="product" />
        <div className="prodImage"></div>

        <div className="prodInfoClust">
          <div className="prodTitle">{product.title}</div>
          <div className="prodCat">{product.category}</div>
          <div className="prodDesc">{product.description}</div>
        </div>
        <div className="prodPrice">${product.price}</div>
      </div>
    </>
  );
};

const Overflow = ({ n }) => {
  return (
    <>
      <div className="card">See All {n} results</div>
    </>
  );
};

const OverFlowDots = ({ n }) => {
  return (
    <>
      To do implement dots
    </>
  );
};

const SearchResults = ({ products, max = 3 }) => {
  return (
    <>
      {products
        ? products.slice(0, max).map((n, i) => (
            <>
              <ResCell product={n} key={i}></ResCell>
            </>
          ))
        : "No Results"}

      {products.length > max ? (
        <>
          <Overflow n={products.length} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchResults;
