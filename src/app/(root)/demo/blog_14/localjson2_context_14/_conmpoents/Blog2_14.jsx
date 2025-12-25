import { FaGlobe } from "react-icons/fa6";
import { FaMugSaucer } from "react-icons/fa6";
import Link from "next/link";
import { BlogContextProvicer_14, useBlogContext_14 } from "../_blogContext_14";

const Blog2_14 = ({ id, img, category, title, descrip }) => {
  const { removeItem } = useBlogContext_14();
  return (
    <article key={id} className="blog">
      <img src={img} alt="Coffee photo" className="img blog-img" />
      <div className="blog-content">
        <span className="flex">
          {category}
          {category === "lifestyle" ? (
            <FaMugSaucer className="ml-1" color="blue" size={14} />
          ) : (
            <FaGlobe className="ml-1" color="blue" size={14} />
          )}
        </span>
        <h3>{title}</h3>
        <p>{descrip}</p>
        <div className="flex justify-between items-center">
          <Link href="#">read more</Link>
          <button
            type="button"
            className="text-red-700 bg-red-100 capitalize px-4 py-2 text-base hover:bg-red-300 rounded"
            onClick={() => removeItem(id)}
          >
            delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default Blog2_14;
