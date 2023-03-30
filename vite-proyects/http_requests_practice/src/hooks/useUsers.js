import React, { useState, useEffect } from 'react';
import { usersApi } from "../api/userApi";


function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await usersApi.get("https://reqres.in/api/users?page=2");
      setUsers(res.data.data);
    }
    fetchData();
  }, []);

  return {users};
}

export default useUsers;