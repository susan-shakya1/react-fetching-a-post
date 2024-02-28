import { useEffect, useState } from "react";
import { PostCard } from "./postcard";
import { Fetchapi } from "../data/fetech";
import { Tpost } from "../data/type";

const default_number_of_post = 5;
export function Postlist() {
  const [posts, setPosts] = useState<Tpost[]>([]);
  const [numberOfPostFromBackend, setNumberOFPostFromBackend] = useState(0);
  const [page] = useState(1);
  // const [postNumber, setPostNumber] = useState(default_number_of_post);
  // const [currentPage] = useState(1);
  // const [postsPerPage] = useState(10);
  const numberOfPage = Math.ceil(
    numberOfPostFromBackend / default_number_of_post
  );
  console.log(numberOfPage);

  const pages = Array.from({ length: numberOfPage }, (_, index) => {
    return index + 1;
  });

  useEffect(() => {
    async function getposts() {
      const posts = await Fetchapi();
      setNumberOFPostFromBackend(posts.length);

      // formula
      // default_number_of_post*(page-1):default_number_of_post*page
      const startindex = default_number_of_post * (page - 1);
      const endindex = default_number_of_post * page;
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

    const startindex = default_number_of_post * (page - 1);
    const endindex = default_number_of_post * page;
    const sliceposts = posts.slice(startindex, endindex);
    setPosts(sliceposts);
  };

  const options = [{ value: 5 }, { value: 8 }, { value: 20 }];
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
      {pages.map((page) => (
        <button
          className="pageBtn"
          onClick={() => {
            handlePageClicked(page);
          }}
        >
          {page}
        </button>
      ))}
      <div>
        <label htmlFor="per-page">Per Page</label>
        <select name="per-page" id="per-page">
          {options.map((options) => (
            <option value="">{options.value}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
