import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import axios from "axios";

export const LoginPage = (props) => {
  return (
    <div className="container">
      <h2>Login</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().required("email is required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={({ email, password }, { setStatus, setSubmitting }) => {
          setStatus();
          axios
            .post(`http://localhost:4000/login`, { email, password })
            .then((res) => {
              if (res.data.length) {
                localStorage.setItem("user", JSON.stringify(res.data));
                localStorage.setItem("loginsuccess", true);
                if (res?.data[0].role === "EMPLOYEE")
                  props.history.push("/userdetails");
                else props.history.push("/userdetailslist");
              } else props.history.push("/");
            });
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                placeholder="Email"
                type="text"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                placeholder="Password"
                type="password"
                className={
                  "form-control" +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </Form>
        )}
      />
    </div>
  );
};
