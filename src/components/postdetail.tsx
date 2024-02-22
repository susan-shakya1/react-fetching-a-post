import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tpost } from "../data/type";
import { ApiForUniqueId } from "../data/ApiForUniqueId";

export function PostDetail() {
  const params = useParams();

  const postId = parseInt(params.postId || "");

  if (postId) {
    return (
      <div>
        <PostData postId={postId} />
      </div>
    );
  }

  return <div>Post id not found</div>;
}

function PostData(props: { postId: number }) {
  const [post, setPost] = useState<Tpost | null>(null);
  useEffect(() => {
    async function GetPost() {
      console.log("props", props);
      const post = await ApiForUniqueId(props.postId);

      setPost(post);
    }
    GetPost();
  });

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "3rem auto",
        height: "100vh",
        border: "2px solid #ddd",
        padding: "20px",
        position: "relative",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#9a9a9a", padding: "10px" }}>
        {post?.title}
      </h1>
      <p
        style={{
          lineHeight: "22px",
          wordSpacing: "5px",
          color: "#444",
          padding: "0 0 20px 0",
        }}
      >
        {post?.body}
      </p>
      <p
        style={{
          color: "#555",
          fontSize: "11px",
          margin: "10px",
        }}
      >
        Post no. {post?.id}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label
          htmlFor=""
          style={{
            fontSize: "18px",
          }}
        >
          comments
        </label>
        <textarea
          name="comments"
          id=""
          rows="10"
          cols="70"
          placeholder="Comments...."
        >
          Comments....
        </textarea>
      </div>
    </div>
  );
}
