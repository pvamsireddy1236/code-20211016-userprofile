import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";

export const UsersList = () => {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
      axios
        .get(`http://localhost:4000/userdetailslist`)
        .then((res) => setUsersList(res.data));
  }, []);

  return (
    <>
      {usersList.length ? (
        <div className="container">
          <h3>User Details</h3>
          <table className="table ">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map(({ name, email, role, id }) => {
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{role}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
