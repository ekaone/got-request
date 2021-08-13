import got from "got";

const data = await got("https://jsonplaceholder.typicode.com/users").json();

for await (const a of data) {
  console.log(a.name);
}
