import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { singleProduct } from "../../features/slices/productSlice";

import { Link} from "react-router-dom";

const ProductCard = () => {

    const dispatch = useDispatch()
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  return (
    <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
      {filteredProducts.map((filteredProduct) => (
        <Link to={`/filteredProducts/${filteredProduct.type}/${filteredProduct.id}`}>
          <Card className="w-96 " key={filteredProduct.id} onClick={()=>dispatch(singleProduct(filteredProduct.id))}>
            <CardHeader color="blue" className="relative h-96">
              <img
                src={filteredProduct.img}
                alt="img-blur-shadow"
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                {filteredProduct.name}
              </Typography>
              <Typography>{filteredProduct.text}</Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            >
              <Typography variant="small">{filteredProduct.price}$</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                {filteredProduct.colors?.map((color, index) => (
                  <i
                    className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4"
                    key={index}
                    style={{ backgroundColor: color }}
                  ></i>
                ))}
              </Typography>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
