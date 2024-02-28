import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { Deletepost } from "../data/delete-post";
import { Tpost } from "../data/type";

import { Link } from "react-router-dom";
export function PostCard(props: {
  title: string;
  description: string;
  postId: number;
  setPosts: React.Dispatch<React.SetStateAction<Tpost[]>>;
  posts: Tpost[];
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [MessageError, setMessageError] = useState(false);
  // TODO: make an state for error message

  const handlePostDelete = async (postId: number) => {
    // set the isDeleting state to true
    setIsDeleting(true);
    setMessageError(false);

    // make api call to the backend to delete the post
    try {
      await Deletepost(postId);

      // remove the post from the UI
      const filteredPosts = props.posts.filter((post) => post.id !== postId);
      props.setPosts(filteredPosts);
    } catch (error) {
      console.log("Error when deleting the post with id:", postId, error);
      setMessageError(true);
      // TODO: set the message that is shown to the user
    }
    setIsDeleting(false);

    // set the isDeleting state to false
  };

  return (
    <div
      style={{
        border: "2px solid #eee",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px 0",
      }}
    >
      <Link to={`/posts/${props.postId}`} style={{ textDecoration: "none" }}>
        <h2
          style={{
            color: "#aaa",
          }}
        >
          {props.title}
        </h2>
      </Link>
      <p
        style={{
          color: "#000",
        }}
      >
        {props.description}
      </p>

      {isDeleting ? (
        <p
          style={{
            padding: "6px 8px",
            margin: "8px auto",
          }}
        >
          Loading...
        </p>
      ) : (
        <button
          style={{
            padding: "6px 8px",
            margin: "8px auto",
          }}
          onClick={() => {
            handlePostDelete(props.postId);
          }}
        >
          <MdDelete height={24} width={24} fill="red" />
          Delete
        </button>
      )}

      {MessageError ? (
        <p
          style={{
            color: "red",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          error occur due to injectiion of stimulated error in program
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
