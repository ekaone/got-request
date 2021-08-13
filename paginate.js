import got from "got";

const countLimit = 5;

const pagination = got.paginate("https://jsonplaceholder.typicode.com/users", {
  pagination: { countLimit },
});

console.log(`Printing latest ${countLimit} Got commits (newest to oldest):`);

for await (const commitData of pagination) {
  console.log(commitData.name);
}
