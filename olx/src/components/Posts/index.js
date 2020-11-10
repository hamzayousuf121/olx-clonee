import React, { useState } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Form, FormGroup, Label, Input, Navbar, Spinner } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import firebase from "../../config/firebase";

function Posts() {
  const [fileDownlodedUrl, setfileDownlodedUrl] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const history = useHistory();

  const onFileChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      newFile["id"] = Math.random();
      firebase
        .storage()
        .ref()
        .child(e.target.files[i].name)
        .put(e.target.files[i])
        .then(function (snapshot) {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          snapshot.ref.getDownloadURL().then((downloadURL) => {
            setfileDownlodedUrl((prevState) => [...prevState, downloadURL]);
          });
        });
    }
  };

  const formik = useFormik({
    initialValues: {
      category: "",
      title: "",
      price: "",
      description: "",
      name: "",
      phone: "",
      location: "",
    },

    validationSchema: Yup.object({
      category: Yup.string().required(),
      title: Yup.string().required(),
      name: Yup.string().required(),
      location: Yup.string().required(),
      phone: Yup.number()
        .required()
        .positive()
        .min(11, "Minimum 11 characters")
        .min(11, "Minimum 11 characters"),
      price: Yup.number()
        .required()
        .positive()
        .integer()
        .min(2, "Minimum 2 characters"),
    }),
    onSubmit: (values) => {
      setSpinner(true);
      var productId = firebase.database().ref('/products').push().key;
      var db = firebase.database().ref("/products").child(productId)
      const {uid} = firebase.auth().currentUser;
      const record = { ...values, images: fileDownlodedUrl, productId, uid };
    
      db.set(record)
        .then(function (docRef) {
          console.log("Product Add Succesfully", docRef);
          history.push("/");
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
          setSpinner(false);
          alert("Error Uploading Products");
        });
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
      <div className="container-fluid">
        <div className="row justify-content-center">
          {spinner ? (
            <Spinner className="post__spinner" type="grow" color="info" />
          ) : (
            <div className="col-lg-6 col-md-6 col-12 shadow">
              <Form onSubmit={formik.handleSubmit}>
                <FormGroup>
                  <h3 className="text-center text-uppercase pt-3  pb-3 text-underline shadow">
                    Post Your Ad
                  </h3>
                  <hr />
                  <h4 htmlFor="category">Select Category</h4>
                  <Input
                    type="select"
                    name="category"
                    value={formik.values.category}
                    id="category"
                    onChange={formik.handleChange}
                  >
                    <option>Select Category</option>
                    <option>Mobile Phone</option>
                    <option>Cars</option>
                    <option>Motorcycles</option>
                    <option>Houses</option>
                    <option>Electronics</option>
                    <option>Tablet</option>
                    <option>Land and plots</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="title">Product Title</Label>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter Product Title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.title && formik.touched.title && (
                    <p className="text-danger">{formik.errors.title}</p>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="description">Product Description</Label>
                  <Input
                    type="textarea"
                    name="description"
                    id="description"
                    defaultValue={formik.values.description}
                    onChange={formik.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="price">Product Price</Label>
                  <Input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Enter Your price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                  />

                  {formik.errors.price && formik.touched.price && (
                    <p className="text-danger">{formik.errors.price}</p>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for="file">Product Image</Label>
                  <Input
                    type="file"
                    multiple
                    onChange={onFileChange}
                    name="file"
                    id="file"
                  />
                </FormGroup>
                <hr />
                <h3>Review Your Details</h3>
                <FormGroup>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />

                  {formik.errors.name && formik.touched.name && (
                    <p className="text-danger">{formik.errors.name}</p>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="phone">Your Phone Number</Label>
                  <Input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter Your phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />

                  {formik.errors.phone && formik.touched.phone && (
                    <p className="text-danger">{formik.errors.phone}</p>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="location">Your Location</Label>
                  <Input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Enter Your location"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                  />

                  {formik.errors.location && formik.touched.location && (
                    <p className="text-danger">{formik.errors.location}</p>
                  )}
                </FormGroup>
                <input
                  type="submit"
                  className="text-center chatwithSeller btn btn-block w-100"
                  value="Post Now"
                />
              </Form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Posts;
