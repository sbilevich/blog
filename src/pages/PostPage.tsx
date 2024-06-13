import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost, getComments } from "../services/api";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import { Typography, CircularProgress } from "@mui/material";
import { Post } from "../types";

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPost(Number(id)).then((response) => setPost(response.data));
    getComments(Number(id)).then((response) => setComments(response.data));
  }, [id]);

  return post ? (
    <div>
      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {post.body}
      </Typography>
      <CommentList comments={comments} postId={post.id} />
      <CommentForm postId={post.id} />
    </div>
  ) : (
    <CircularProgress />
  );
};

export default PostPage;
