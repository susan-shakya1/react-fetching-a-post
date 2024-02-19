import { useEffect, useState } from "react";
import { Postcard } from "./postcard";
export function Postlist() {
  const [posts, setposts] = useState<
    {
      id: number;
      userid: number;
      title: string;
      body: string;
    }[]
  >([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        setposts(jsonData);
      })
      .catch((error) => {
        console.log("error if json format is not formated", error);
      });
  }, []);
  return (
    <div>
      {posts.map((post) => {
        return (
          <Postcard key={post.id} title={post.title} description={post.body} />
        );
      })}
    </div>
  );
}
