import axios from "axios";

export const fetchData = () => {
  const userPromise = fetchUser();
  const postPromise = fetchPosts();
  const fakePromise = fetchFake();

  return {
    user: wrapPromise(userPromise),
    post: wrapPromise(postPromise),
    fake: wrapPromise(fakePromise),
  };
};

const wrapPromise = (promise) => {
  let status = "pending";

  let result;

  let suspender = promise.then(
    (response) => {
      status = "success";
      result = response;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return {
    read() {
      console.log(status);
      if (status === "pending") {
        throw suspender;
      } else if (status === "success") {
        return result;
      } else if (status === "error") {
        throw result;
      }
    },
  };
};

const fetchUser = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data)
    .catch(console.error);
};

const fetchPosts = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data)
    .catch(console.error);
};

const fetchFake = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.round(Math.random()) === 0) resolve(true);
      else return reject(false);
    }, 1500);
  }).then((response) => response);
};
