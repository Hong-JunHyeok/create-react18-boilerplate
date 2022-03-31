import { fetchData } from "../Utils/Api";

const resource = fetchData();

const User = () => {
  const users = resource.user.read();

  const mapUsers = users.map((user) => (
    <div key={user.id}>
      <h1>
        {user.name}({user.email})
      </h1>
      <p>{user.body}</p>
    </div>
  ));

  return <>{mapUsers}</>;
};

export default User;
