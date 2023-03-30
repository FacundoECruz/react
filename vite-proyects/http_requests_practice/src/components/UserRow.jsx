import React from "react";

function UserRow({user}) {

  return (
    <tr key={user.email}>
      <td>{user.id}</td>
      <td>{user.email}</td>
      <td>
        {user.last_name}, {user.first_name}
      </td>
      <td>
        <img
          src={user.avatar}
          className="img-thumbnail"
          style={{
            width: 50,
          }}
        />
      </td>
    </tr>
  );
}

export default UserRow;