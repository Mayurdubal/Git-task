import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

export function RegisterPage() {

    const navigate = useNavigate(); 

    return (
        <div className="container-fluid">
            <h3>Register users</h3>
            <Formik
                initialValues={{
                    UserId: " ",
                    UserName: "",
                    Password: "",
                    Email: "",
                    Age: 0,
                    Mobile: ""

                }}
                validationSchema={
                    yup.object({
                        UserId: yup.string().required("UserID is Requird"),
                        UserName: yup.string().required("UserName is Requird"),
                        Password: yup.string().required("Password is Requird").matches(/(?=.*[A-Z])\w{4,15}/, "Password 4 to 15 chars with atleast one Uppercase Letter"),
                        Email: yup.string().required("Email is Requird").email("Invalid Email"),
                        Age: yup.string().required("Age is Requird"),
                        Mobile: yup.string().required("Mobile is Requird").matches(/\+91\d{10}/, "Invalid Mobile +91 & 10 Digits"),
                    })
                }
                onSubmit={
                    (values) => {
                        axios({
                            method: "post",
                            url: "http://127.0.0.1:5000/registeruser",
                            data: values
                        })
                            .then(() => {
                                alert("Register Successfully ..");
                                navigate("/login");
                            })
                    }
                }
            >
                {
                    <Form>
                        <dl>
                            <dt>UserID</dt>
                            <dd><Field type="text" name="UserId"/> </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="UserId"/>
                            </dd>

                            <dt>UserName</dt>
                            <dd><Field type="text" name="UserName"/> </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="UserName"/>
                            </dd>

                            <dt>Password</dt>
                            <dd><Field type="password" name="Password"/> </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="Password"/>
                            </dd>

                            <dt>Email</dt>
                            <dd><Field type="text" name="Email"/> </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="Email"/>
                            </dd>

                            <dt>Age</dt>
                            <dd><Field type="number" name="Age"/> </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="Age"/>
                            </dd>

                            <dt>Mobile</dt>
                            <dd><Field type="text" name="Mobile"/> </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="Mobile"/>
                            </dd>

                        </dl>
                        <button className="btn btn-primary">Register</button>
                        <div>
                            <Link to="/login">Exiting User ?</Link>
                        </div>
                    </Form>
                }
            </Formik>
        </div>
    )
}