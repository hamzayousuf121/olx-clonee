import React from "react";
import { Form, FormGroup, Label, Input, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import * as Yup from "yup";
import "./style.css";

function Userform() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <>
      <Navbar color="faded" light className="navbar">
        <Link to="/" className="postNavbar">
          <span className="pr-3">
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="lg"
              className="faArrowLeft"
            />
          </span>
          <svg
            width="48px"
            height="48px"
            viewBox="0 0 1024 1024"
            data-aut-id="icon"
            className=""
            fillRule="evenodd"
          >
            <path
              className="rui-77aaa"
              d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
            ></path>
          </svg>
        </Link>
      </Navbar>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 col-md-6 col-12 shadow mt-5">
            <div className="text-center">
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 1024 1024"
                data-aut-id="icon"
                fillRule="evenodd"
              >
                <path
                  className="rui-77aaa"
                  d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
                ></path>
              </svg>
            </div>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Enter Your Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-danger">{formik.errors.email}</p>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />

                {formik.errors.password && formik.touched.password && (
                  <p className="text-danger">{formik.errors.password}</p>
                )}
              </FormGroup>
              <button className="btn btn-success btn-block" type="submit">
                Login
              </button>
              
            </Form>
            <div className="my-3 text-bold routeLink">
              <Link to="/register">Register </Link>
              <Link to="/"> Go to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userform;
