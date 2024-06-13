import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { deletePost } from "../services/api";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Post } from "../types";

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const navigate = useNavigate();

  const handleEdit = (postId: number) => {
    navigate(`/edit-post/${postId}`);
  };
  const handleDelete = (postId: number) => {
    deletePost(postId).then(() => {
      window.location.reload();
    });
  };

  return (
    <List>
      {posts.map((post) => (
        <ListItem
          key={post.id}
          className="border-b border-gray-200 p-4 flex justify-between"
          secondaryAction={
            <>
              <IconButton
                aria-label="comment"
                onClick={() => handleEdit(post.id)}
                color="default"
                className="mr-2"
              >
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(post.id)} color="default">
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <ListItemText>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </ListItemText>
          <div></div>
        </ListItem>
      ))}
    </List>
  );
};

export default PostList;
