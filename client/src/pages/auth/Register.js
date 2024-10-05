import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-7 form-banner ">
            <img src="./assets/images/image1.webp" alt="registerImage" />
          </div>
          <div className="col-md-5 form-container d-flex align-items-center flex-column ">
          <div><h1>Blood <span className="font-weight-bold text-danger">Vault</span> </h1></div>
            <Form
              // formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
