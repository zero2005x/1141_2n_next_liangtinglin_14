
import { FaGlobe } from "react-icons/fa";
import { FaMugSaucer } from "react-icons/fa6";


function Blog_14({ id, img, category, title, desc }) {
  return (
      <article className="blog" key={id}>``
                    <img
                      src={img}
                      alt="Coffee photo"
                      className="img blog-img"
                    />
                    <div className="blog-content">
                      <span>{category} {category === 'lifestyle' ? <FaMugSaucer /> : <FaGlobe />}</span>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                      <a href="#">read more</a>
                    </div>
                  </article>
    
  )
}

export default Blog_14
