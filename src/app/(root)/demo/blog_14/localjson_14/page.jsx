"use client";
import { FaGlobe } from "react-icons/fa";
import { FaMugSaucer } from "react-icons/fa6";
import blogsData_14 from "../../_assets/data/blogData.json";
import Blog2_14 from "../../_components/Blog2_14";
import Alert_14 from "../../_components/Alert_14";
import Wrapper from "../../_assets/wrappers/Blog2_14";
import { useState } from "react";

const BlogLocalJsonPage2_14 = () => {
  const [name, setName] = useState("liangtinglin");
  const [id, setID] = useState(913410014);
  const [blogs_14, setBlogs_14] = useState(blogsData_14);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const removeAllItem = () => {
    // show a success alert
    showAlert(true, "danger", "Clear All Blogs");
    // set the blogs state to an empty array
    setBlogs_14([]);
  };
  const loadAllItem = () => {
    // show a success alert
    showAlert(true, "success", "All Blogs Loaded");
    // reset the blogs state to the original data
    setBlogs_14(blogsData_14);
  };

  const removeItem = (id) => {
    // show a danger alert
    showAlert(true, "warning", `Blog with ID ${id} Removed`);
    // filter out the item with the given id
    const newBlogs = blogs_14.filter((blog) => blog.id !== id);
    // update the state with the new array
    setBlogs_14(newBlogs);
  };
  return (
    <>
      <Wrapper>
        {alert.show && <Alert_14 alert={alert} showA={showAlert} />}
        <section className="blogs">
          <div className="section-title">
            <h2>
              Blog from local json -- {name}, {id}
            </h2>
          </div>
          <div className="blogs-center">
            {blogs_14.map((item) => {
              const { id, img, category, title, desc } = item;
              return (
                <Blog2_14
                  key={id}
                  id={id}
                  img={img}
                  category={category}
                  title={title}
                  desc={desc}
                  removeItem={removeItem}
                />
              );
            })}
          </div>
          <div className="flex justify-center items-center gap-8 mt-8">
            <button
              type="button"
              className="text-red-700 bg-red-200 hover:bg-red-300  capitalize px-4 py-2 text-base rounded"
              onClick={removeAllItem}
            >
              Delete All Blogs
            </button>
            <button
              type="button"
              className="text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px-4 py-2 text-base rounded"
              onClick={loadAllItem}
            >
              load all blogs
            </button>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default BlogLocalJsonPage2_14;
