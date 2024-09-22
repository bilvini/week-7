import React from 'react';

function UserCard(props) {
  const { name, email } = props;

  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

function UserList() {
  const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
  ];

  return (
    <div>
      {users.map((user, index) => (
        <UserCard key={user.email} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default UserList;