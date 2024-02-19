import { useEffect, useState } from "react";
import { Postcard } from "./postcard";
import { Fetchapi } from "../data/fetech";
import { Tpost } from "../data/type";

export function Postlist() {
  const [posts, setposts] = useState<Tpost[]>([]);
  useEffect(() => {
    async function getposts() {
      const posts = await Fetchapi();
      setposts(posts);
    }
    getposts();
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
