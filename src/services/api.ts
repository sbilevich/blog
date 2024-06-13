import axios from "axios";
import { Post } from "../types";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = () => api.get("/posts");
export const getPost = (postId: number) => api.get(`/posts/${postId}`);
export const getComments = (postId: number) =>
  api.get(`/posts/${postId}/comments`);
export const createPost = (data: Omit<Post, "id">) => api.post("/posts", data);
export const updatePost = (postId: number, data: Omit<Post, "id">) =>
  api.put(`/posts/${postId}`, data);
export const deletePost = (postId: number) => api.delete(`/posts/${postId}`);

export const createComment = (postId: number, data: { body: string }) =>
  api.post(`/posts/${postId}/comments`, data);
export const updateComment = (commentId: number, data: { body: string }) =>
  api.put(`/comments/${commentId}`, data);
export const deleteComment = (commentId: number) =>
  api.delete(`/comments/${commentId}`);
