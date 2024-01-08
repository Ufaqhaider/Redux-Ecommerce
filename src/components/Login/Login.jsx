import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { login } from "../../features/slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const initialState = {
    name: "",
    password: "",
    image: "",
  };
  const [values, setValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // Navigate only if there are no errors and the submit button is clicked
      dispatch(login(values));
    }
    // eslint-disable-next-line
  }, [formErrors, isSubmit]);
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(values));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0) {
      dispatch(login(values));
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name.trim()) {
      errors.name = "Username is required";
    }

    if (!values.password.trim()) {
      errors.password = "Password is required";
    } else if (values.password.length < 5) {
      errors.password = "Password should be at least 5 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password should not exceed 10 characters";
    }

    return errors;
  };

  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Name"
            size="lg"
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
          />
          {isSubmit && <p className="errors text-red-600">{formErrors.name}</p>}

          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          {isSubmit && <p className="errors text-red-600">{formErrors.password}</p>}

          <Input
            label="Image URL address"
            size="lg"
            type="text"
            name="image"
            value={values.image}
            onChange={onChange}
          />
          <div className="-ml-2.5"></div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={handleSubmit} // Corrected here
          >
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Image is Optional
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
