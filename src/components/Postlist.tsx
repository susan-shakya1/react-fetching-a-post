import { useEffect, useState } from "react";
import { PostCard } from "./postcard";
import { Fetchapi } from "../data/fetech";
import { Tpost } from "../data/type";

export function Postlist() {
  const [posts, setPosts] = useState<Tpost[]>([]);
  const [numberOfPostFromBackend, setNumberOFPostFromBackend] = useState(0);
  const [page, setPage] = useState(1);
  // const default_number_of_post = 5;
  const [postNumber, setPostNumber] = useState(5);
  // const [currentPage] = useState(1);
  // const [postsPerPage] = useState(10);
  const numberOfPage = Math.ceil(numberOfPostFromBackend / postNumber);
  console.log("this is the number of page required", numberOfPage);

  const pages = Array.from({ length: numberOfPage }, (_, index) => {
    return index + 1;
  });
  const options = [{ value: 5 }, { value: 10 }, { value: 20 }];

  useEffect(() => {
    async function getposts() {
      const posts = await Fetchapi();
      setNumberOFPostFromBackend(posts.length);

      // formula
      // default_number_of_post*(page-1):default_number_of_post*page
      const startindex = postNumber * (page - 1);
      const endindex = postNumber * page;
      const sliceposts = posts.slice(startindex, endindex);
      setPosts(sliceposts);
    }
    getposts();
  }, []);

  // const indexlastPage = currentPage * postsPerPage;
  // const indexOfFirstPage = indexlastPage - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPage, indexOfFirstPage);

  const handlePageClicked = async (page: number) => {
    const posts = await Fetchapi();
    setNumberOFPostFromBackend(posts.length);

    const startindex = postNumber * (page - 1);
    const endindex = postNumber * page;
    const sliceposts = posts.slice(startindex, endindex);
    console.log("this show post slice", sliceposts);
    setPosts(sliceposts);
  };

  const handlePostsChange = async (event) => {
    const value = parseInt(event.target.value);
    console.log("this is the value", value);
    const page = 1;
    setPostNumber(value);
    const posts = await Fetchapi();
    setNumberOFPostFromBackend(posts.length);

    const startindex = value * (page - 1);
    const endindex = value * page;
    const sliceposts = posts.slice(startindex, endindex);
    console.log("this show post slice", sliceposts);
    setPosts(sliceposts);
    setPage(1);
  };
  return (
    <div
      style={{
        maxWidth: "800px",
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
      {pages.map((pageElement) => (
        <button
          className="pageBtn"
          // style={{
          //   backgroundColor: pageElement === page ? "red" : "transparent",
          // }}
          onClick={() => {
            handlePageClicked(pageElement);
          }}
        >
          {pageElement}
        </button>
      ))}
      <div>
        <label htmlFor="per-page">Per Page</label>
        <select
          name="per-page"
          id="per-page"
          value={postNumber}
          onChange={handlePostsChange}
        >
          {options.map((options) => (
            <option value={options.value} key={options.value}>
              {options.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
