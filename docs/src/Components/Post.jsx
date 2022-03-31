import { fetchData } from "../Utils/Api";

const resource = fetchData();

const Post = () => {
  const posts = resource.post.read();

  const mapPosts = posts.map((post) => (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  ));

  return <>{mapPosts}</>;
};

export default Post;
