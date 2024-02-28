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
  const handlevalue = (value: string) => {
    setPost((preValue) => {
      if (preValue) {
        return {
          ...preValue,
          body: value,
        };
      } else {
        return preValue;
      }
    });
  };
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
      <textarea
        style={{
          width: "100%",
          height: "100px",
        }}
        value={post?.body}
        onChange={(e) => {
          const body = e.target.value;
          handlevalue(body);
        }}
      />

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
        <textarea name="comments" id="" placeholder="Comments....">
          Comments....
        </textarea>
      </div>
    </div>
  );
}
