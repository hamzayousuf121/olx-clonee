import React, {useState} from "react";
import { Form, FormGroup, Label, Input, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import firebase from '../../config/firebase';
import * as Yup from "yup";
import "./style.css";

function Userform() {

const [img, setImg] = useState([])

  const formik = useFormik({
    initialValues: {
      name:"",
      email: "",
      password: "",
    },
    
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Minimum 3 characters").max(20, "Maximum 20 characters").required(" Name is Required!"),
      email: Yup.string().email("Invalid email format").required("Email is Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Password is Required!")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
      .then(({user})=>{
            console.log(user.uid, "USer Uid")
            // const random = Math.random * 45545 * 54545454; 
            // const imgName = e.target.files[0].name + random
            // firebase.storage().ref().child(imgName).put(e.target.files[0])
            //   .then(function (snapshot) {
            //     var progress =
            //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //     console.log("Upload is " + progress + "% done");
            //     snapshot.ref.getDownloadURL().then((downloadURL) => {
            //       setfileDownlodedUrl((prevState) => [...prevState, downloadURL]);
                  
            //       const userInfo = {
            //           name: values.displayName,
            //           email: values.email,
            //           imageUrl: downloadURL,
            //           uid: values.uid,
            //         };
            //         firebase.database().ref("/").child(`users/${user.uid}`)
            //         .set(userInfo)
            //         .then(() => console.log("User Add SuccessFully"));
            //       dispatch({ type: "SETUSER", payload: userInfo });
  
            //       });
            //   });
          
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
     
    }
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
                <Label for="username">Enter Your Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="username"
                  placeholder="Enter Your Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name && (
                  <p className="text-danger">{formik.errors.name}</p>
                )}
              </FormGroup>

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
              <FormGroup>
                  <Label for="file">Product Image</Label>
                  <Input
                    type="file"
                    name="image"
                    id="image"
                    onChange={(e)=> setImg(e.target.files)}
                  />
                </FormGroup>
              <button className="btn btn-info btn-block " type="submit">
                Register
              </button>
            </Form>
            <div className="my-3 text-bold d-flex routeLink">
            <Link to="/login">Login </Link>

              <Link to="/" className="">
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userform;
