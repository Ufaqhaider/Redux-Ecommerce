import React from "react";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { useDispatch, useSelector } from "react-redux";
import Error from "../Error/Error";
import {
  filterGender,
  filterByColor,
  filterBySize,
  sortByPrice,
  filterProducts,
} from "../../features/slices/productSlice";

const FilterProducts = () => {
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();

  const genderButtons = ["male", "female"];
  const sizeShoes = ["36", "38", "40", "42"];

  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];

  const sizeButtons = ["S", "M", "L", "XL"];

  const dispatch = useDispatch();
  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
          <div className="flex items-center justify-between py-8">
            <div className="flex items-center">
              {genderButtons.map((gender) => (
                <div>
                  <Button
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                    onClick={() => dispatch(filterGender(gender))}
                  >
                    {gender}
                  </Button>
                </div>
              ))}
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                onClick={() => dispatch(sortByPrice())}
              >
                High Price
              </Button>
              <Menu>
                <MenuHandler>
                  <Button
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                    Select a Color
                  </Button>
                </MenuHandler>
                <MenuList>
                  {colorButtons.map((item, index) => {
                    return (
                      <MenuItem
                        style={{ color: item }}
                        key={index}
                        onClick={() => dispatch(filterByColor(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
              <Menu>
                <MenuHandler>
                  <Button
                    disabled={type === "Bags"}
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                    Select a Size
                  </Button>
                </MenuHandler>
                <MenuList>
                  {type === "Shoes"
                    ? sizeShoes.map((item, index) => {
                        return (
                          <MenuItem
                            style={{ color: item }}
                            key={index}
                            onClick={() => dispatch(filterBySize(item))}
                          >
                            {item}
                          </MenuItem>
                        );
                      })
                    : sizeButtons.map((item, index) => {
                        return (
                          <MenuItem
                            style={{ color: item }}
                            key={index}
                            onClick={() => dispatch(filterBySize(item))}
                          >
                            {item}
                          </MenuItem>
                        );
                      })}
                </MenuList>
              </Menu>
            </div>
            <div className="pr-14">
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                onClick={() => dispatch(filterProducts(type))}
              >
                Clear Filter
              </Button>
            </div>
          </div>
        </div>
        {error ? (
          <Error />
        ) : (
          <div>
            <ProductCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterProducts;
