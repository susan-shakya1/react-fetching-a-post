import { Tpost } from "./type";

export function Fetchapi(): Promise<Tpost[]> {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then((data) => {
        return data.json();
      })
      .then((jsonApi) => {
        resolve(jsonApi);
      })
      .catch((error) => {
        console.log(error);
        reject("Error occur during fetch an api");
      });
  });
}
