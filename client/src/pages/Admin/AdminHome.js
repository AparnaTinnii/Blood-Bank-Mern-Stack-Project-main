import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h2 className="fs-3 fw-bold"> Blood <span className="font-weight-bold text-danger">Vault</span> </h2>
          <hr />
          <p>
            Welcome to <span className="fs-5 fw-bold"> Blood <span className=" text-danger">Vault</span> </span> ,where our primary goal is to save lives through the vital act of blood donation. In the face of ongoing medical needs—ranging from emergency surgeries and trauma care to cancer treatments and chronic illness management—maintaining a reliable and sufficient supply of blood is crucial. Our organization is committed to ensuring that every donation counts, and we rely on the generosity of donors, volunteers, and partners to achieve this mission. We organize blood donation drives at various locations, including schools, businesses, and community centers, making it convenient for individuals to contribute. Our dedicated donation centers are equipped with state-of-the-art facilities and staffed by trained professionals who ensure a safe and comfortable donation experience. After collection, each unit of blood undergoes rigorous testing and processing to meet the highest standards of safety and quality before being distributed to hospitals and clinics as needed. In addition to blood donation, there are numerous ways to get involved: you can volunteer your time, partner with us through corporate or community initiatives, or support our events and campaigns. Staying connected with us through our website will keep you informed about the latest updates, donation opportunities, and the significant impact your contributions have on the community. By participating in our mission, you help ensure that life-saving blood products are always available for those in need. Together, we can make a meaningful difference, one donation at a time. Thank you for your support and commitment to this essential cause.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
