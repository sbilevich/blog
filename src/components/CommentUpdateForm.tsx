import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateComment, getComments } from "../services/api";
import { TextField, Button } from "@mui/material";
import { Comment } from "../types";

const CommentUpdateForm: React.FC = () => {
  const { postId, commentId } = useParams<{
    postId: string;
    commentId: string;
  }>();
  const navigate = useNavigate();
  const [body, setBody] = useState("");

  useEffect(() => {
    getComments(Number(postId)).then((response) => {
      const comment = response.data.find(
        (comment: Comment) => comment.id === Number(commentId)
      );
      if (comment) {
        setBody(comment.body);
      }
    });
  }, [postId, commentId]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    updateComment(Number(commentId), { body }).then(() => {
      navigate(`/post/${postId}`);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Edit comment"
        multiline
        rows={4}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Update
      </Button>
    </form>
  );
};

export default CommentUpdateForm;
