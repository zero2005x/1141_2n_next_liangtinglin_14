import Wrapper from "../../../_assets/wrappers/Blog2_14";
import { useBlogContext_14 } from "../_blogContext_14";
import Blog2_14 from "./Blog2_14";

const BlogList2_14 = () => {
  const { blogs_14, removeItem } = useBlogContext_14();

  return (
    <Wrapper>
      <div className="blogs-center">
        {blogs_14?.map((item) => {
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
    </Wrapper>
  );
};

export default BlogList2_14;
