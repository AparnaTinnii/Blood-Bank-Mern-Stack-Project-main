import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-7 form-banner">
            <img src="./assets/images/image3.jpeg" alt="loginImage" />
          </div>
          <div className="col-md-5 form-container d-flex align-items-center flex-column border border-dark col px-md-5">
          <div className="border border-dark p-3 align-items-center rounded">
            <div><h1>Blood <span className="font-weight-bold text-danger ">Vault</span> </h1></div>
         
            <Form
              // formTitle={"Login "}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
