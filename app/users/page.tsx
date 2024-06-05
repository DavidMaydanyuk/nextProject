import React from "react";

interface User {
  id: string;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 }, // next will refresh cache every 10 seconds
    // { cache: 'no-store' } to disable caching: for data that changes frequently
  });
  // sending http request to backend
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
