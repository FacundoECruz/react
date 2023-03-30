import React, { useEffect, useState } from "react";
import useUsers from "../hooks/useUsers";

function UsersPage() {
  
  const {users} = useUsers();

  return (
    <div className="mt-5">
      <h1>Users</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => {
            return (
              <tr key={u.email}>
                <td>{u.id}</td>
                <td>{u.email}</td>
                <td>
                  {u.last_name}, {u.first_name}
                </td>
                <td>
                  <img
                    src={u.avatar}
                    className="img-thumbnail"
                    style={{
                      width: 50,
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UsersPage;
