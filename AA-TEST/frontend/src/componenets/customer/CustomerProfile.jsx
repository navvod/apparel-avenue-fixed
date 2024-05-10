import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import ProfileSideBar from "./ProfileSideBar"; // Import the ProfileSidebar component

function CustomerProfile() {
  const { id } = useParams();
  const [customerData, setCustomerData] = useState({
    fullName: "",
    contactNumber: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8500/user/get/${id}`
        );
        setCustomerData(response.data);
      } catch (error) {
        console.error("Error:", error.response.data.error);
        console.log("Data fetching error");
      }
    };
    fetchCustomerData();
  }, [id]);

  return (
    <>
      {/* Include ProfileSidebar component */}
      <ProfileSideBar />
      <div className="container">
        {/* User details card */}
        <div
          className="card mx-auto mt-5"
          style={{ maxWidth: "600px", maxHeight: "800px" }}
        >
          <div className="card-header" style={{ fontSize: "24px" }}>
            Hello {customerData.fullName}
          </div>
          <div className="card-body">
            <p className="card-text">
              <strong>Full Name:</strong> {customerData.fullName}
            </p>
            <p className="card-text">
              <strong>Contact Number:</strong> {customerData.contactNumber}
            </p>
            <p className="card-text">
              <strong>Username:</strong> {customerData.username}
            </p>
            <p className="card-text">
              <strong>Email:</strong> {customerData.email}
            </p>
            {/* Edit button inside the card */}
            <div className="text-right">
              <Link
                to={`/user/update-customerProfile/${id}`}
                className="btn btn-primary"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerProfile;
