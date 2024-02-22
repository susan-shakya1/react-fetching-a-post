import { useEffect, useState } from "react";
import { PostCard } from "./postcard";
import { Fetchapi } from "../data/fetech";
import { Tpost } from "../data/type";

export function Postlist() {
  const [posts, setPosts] = useState<Tpost[]>([]);
  useEffect(() => {
    async function getposts() {
      const posts = await Fetchapi();
      setPosts(posts);
    }
    getposts();
  }, []);
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      {posts.map((post) => {
        return (
          <div>
            <PostCard
              key={post.id}
              postId={post.id}
              title={post.title}
              description={post.body}
              posts={posts}
              setPosts={setPosts}
            />
          </div>
        );
      })}
    </div>
  );
}
