import React from "react";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

const FilterProducts = () => {

  const {type} = useParams()
  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
        </div>
        <div >

        <ProductCard />

        </div>
      </div>

    </div>
  );
};

export default FilterProducts;
