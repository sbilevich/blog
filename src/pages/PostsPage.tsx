import React, { useState, useEffect } from "react";
import { getPosts } from "../services/api";
import PostList from "../components/PostList";
import Pagination from "@mui/material/Pagination";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response.data);
      setTotalPages(Math.ceil(response.data.length / 10)); // assuming 10 posts per page
    });
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const paginatedPosts = posts.slice((page - 1) * 10, page * 10);

  return (
    <div>
      <PostList posts={paginatedPosts} />
      <Pagination count={totalPages} page={page} onChange={handlePageChange} />
    </div>
  );
};

export default PostsPage;
