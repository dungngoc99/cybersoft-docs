//Nếu thêm async vào function => return promiss
async function getData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 2000);
  });

  //khi thêm await trước promise, chương trình sẽ block cho đến khi promise đo được resolve, tương đương fulilled
  //Lưu ý: await chỉ được sử dụng bên trong async function
  const data = await promise;
  console.log("Done");
  return data;
}

// tương đương với

// getData().then((data) => {
//   setTimeout(() => {
//     resolve("OK");
//   }, 2000);
// });

// sử dụng async await cho call API
// axios trả về 1 object response {status, data, heades,...}

async function main() {
  try {
    const { data: user } = await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users/1",
    });
    console.log(user);
    const [postsData, todosData] = await Promise.all([
      axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/todos?userID=${user.id}`,
      }),
      axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/posts?userID=${user.id}`,
      }),
    ]);
    console.log(postsData.data, todosData.data);
  } catch (error) {
    console.log(error);
  }
}

main();
