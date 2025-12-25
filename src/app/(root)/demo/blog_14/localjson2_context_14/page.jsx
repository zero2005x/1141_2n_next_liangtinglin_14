"use client";
import Blog2_14 from "./_conmpoents/Blog2_14";
import BlogList2_14 from "./_conmpoents/BlogList2_14";
import Alert_14 from "../../_components/Alert_14";
import Wrapper from "../../_assets/wrappers/Blog2_14";
import { useBlogContext_14, BlogContextProvicer_14 } from "./_blogContext_14";

const Content_14 = () => {
  const {
    blogs_14,
    name,
    id,
    alert,
    showAlert,
    removeItem,
    clearAllBlogs,
    loadAllBlogs,
  } = useBlogContext_14();

  return (
    <Wrapper>
      {alert.show && <Alert_14 alert={alert} showA={showAlert} />}
      <section className="blogs">
        <div className="section-title">
          <h2>
            Blog Context from local json 2-- {name}, {id}
          </h2>
        </div>
        <BlogList2_14 />
        <div className="flex justify-center items-center gap-8 mt-8">
          <button
            type="button"
            className="text-red-700 bg-red-200 hover:bg-red-300  capitalize px-4 py-2 text-base rounded"
            onClick={clearAllBlogs}
          >
            Delete All Blogs
          </button>
          <button
            type="button"
            className="text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px-4 py-2 text-base rounded"
            onClick={loadAllBlogs}
          >
            load all blogs
          </button>
        </div>
      </section>
    </Wrapper>
  );
};

const BlogLocalJsonPage2_14 = () => {
  return (
    <BlogContextProvicer_14>
      <Content_14 />
    </BlogContextProvicer_14>
  );
};

export default BlogLocalJsonPage2_14;
