import React from "react";

interface User {
  id: string;
  name: string;
  email: string;
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
      <h1 className="">Users:</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
