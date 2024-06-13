import React from "react";
import { deleteComment } from "../services/api";
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Comment } from "../types";

interface CommentListProps {
  comments: Comment[];
  postId: number;
}

const CommentList: React.FC<CommentListProps> = ({ comments, postId }) => {
  const navigate = useNavigate();

  const handleDelete = (commentId: number) => {
    deleteComment(commentId).then(() => {
      window.location.reload();
    });
  };
  const handleEdit = (commentId: number) => {
    navigate(`/post/${postId}/edit-comment/${commentId}`);
  };
  return (
    <List>
      {comments.map((comment) => (
        <ListItem
          key={comment.id}
          className="border-b border-gray-200 p-4"
          secondaryAction={
            <>
              <IconButton
                aria-label="comment"
                onClick={() => handleEdit(comment.id)}
                color="default"
                className="mr-2"
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => handleDelete(comment.id)}
                color="default"
              >
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <ListItemText>{comment.body}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default CommentList;
