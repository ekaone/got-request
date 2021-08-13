import got from "got";

const data = await got
  .post("https://jsonplaceholder.typicode.com/posts", {
    json: {
      userId: "5",
      id: "101",
      title: "world",
      body: "world",
    },
  })
  .json();

console.log(data);
// { userId: '5', id: 101, title: 'world', body: 'world' }
