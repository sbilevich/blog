import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createPost, updatePost, getPost } from "../services/api";
import { Button, Stack, TextField } from "@mui/material";

const PostForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (id) {
      getPost(Number(id)).then((response) => {
        setTitle(response.data.title);
        setBody(response.data.body);
      });
    }
  }, [id]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const data = { title, body };
    if (id) {
      updatePost(Number(id), data).then(() => navigate("/"));
    } else {
      createPost(data).then(() => navigate("/"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <Stack spacing={2}>
        <TextField
          fullWidth
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
        />
        <TextField
          fullWidth
          required
          label="Post"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained">
          {id ? "Update Post" : "Create Post"}
        </Button>
      </Stack>
    </form>
  );
};

export default PostForm;
