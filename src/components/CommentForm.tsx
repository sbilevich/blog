import React, { useState } from "react";
import { createComment } from "../services/api";
import { TextField, Button } from "@mui/material";

interface CommentFormProps {
  postId: number;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId }) => {
  const [body, setBody] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createComment(postId, { body }).then(() => {
      window.location.reload();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Write a comment..."
        multiline
        rows={4}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default CommentForm;
