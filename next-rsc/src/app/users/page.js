import AddUser from './AddUser';

export default async function Users() {
  const response = await fetch("http://127.0.0.1:4002/api/users");
  const users = await response.json();
  console.log('users', users);

  return (
    <div>
      <h2>This is users page</h2>
      <pre>{JSON.stringify(users, null, 4)}</pre>
      <AddUser />
    </div>
  );
}
