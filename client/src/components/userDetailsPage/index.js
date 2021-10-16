import axios from "axios";
import React, { useEffect, useState } from "react";
import { userInfo } from "../../services/login";
import "./style.css";
export const UserDetailsPage = () => {
  const userInformation = userInfo();

  const [userInfoDetails, setUsersInfo] = useState([]);
  const [loadOnce, setLoadOnce] = useState(false);

  useEffect(() => {
    if (userInformation &&  !loadOnce) {
      axios
        .post(`http://localhost:4000/userdetails`, userInformation)
        .then((res) => {setUsersInfo(res.data); setLoadOnce(true);});
    }
  }, [userInformation,loadOnce]);

  return (
    <>
      {userInformation && userInfoDetails.length && (
        <div className="container">
          <h4>Profile</h4>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center listBorderRemove">
              Name: <span>{userInfoDetails[0].name}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center listBorderRemove">
              Email: <span>{userInfoDetails[0].email}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center listBorderRemove">
              Role: <span>{userInfoDetails[0].role}</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
