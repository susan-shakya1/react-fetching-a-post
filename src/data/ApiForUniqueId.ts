

export async function ApiForUniqueId(postId:number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  console.log("Data to be shown with id ", postId);
  console.log("the data to be fetch", data);
  return data;
}
