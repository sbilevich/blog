import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import PostForm from "./components/PostForm";
import CommentUpdateForm from "./components/CommentUpdateForm";

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <Navigation />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<PostsPage />} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path="/create-post" element={<PostForm />} />
              <Route path="/edit-post/:id" element={<PostForm />} />
              <Route
                path="/post/:postId/edit-comment/:commentId"
                element={<CommentUpdateForm />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
