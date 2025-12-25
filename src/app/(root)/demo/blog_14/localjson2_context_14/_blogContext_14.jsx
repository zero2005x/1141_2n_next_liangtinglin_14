"use client";
import { useState, createContext, useContext } from "react";
import blogsData_14 from "../../_assets/data/blogData.json";

const BlogContext = createContext();

export const BlogContextProvicer_14 = ({ children }) => {
  const [blogs_14, setBlogs_14] = useState(blogsData_14);
  const [name, setName] = useState("liangtinglin");
  const [id, setID] = useState(913410014);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const removeItem = (id) => {
    // show a danger alert
    showAlert(true, "warning", `Blog with ID ${id} Removed`);
    // filter out the item with the given id
    const newBlogs = blogs_14.filter((blog) => blog.id !== id);
    // update the state with the new array
    setBlogs_14(newBlogs);
  };

  const clearAllBlogs = () => {
    showAlert(true, "danger", "Clear All Blogs");
    setBlogs_14([]);
  };

  const loadAllBlogs = () => {
    showAlert(true, "success", "All Blogs Loaded");
    setBlogs_14(blogsData_14);
  };

  return (
    <BlogContext.Provider
      value={{
        blogs_14,
        name,
        id,
        alert,
        showAlert,
        removeItem,
        clearAllBlogs,
        loadAllBlogs,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext_14 = () => {
  return useContext(BlogContext);
};
