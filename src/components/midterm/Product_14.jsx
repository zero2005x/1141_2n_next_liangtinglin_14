import Wrapper from "@/assets/wrappers/midterm/Shop_14";

const Product_14 = ({
  pId,
  name,
  category,
  price,
  img_url,
  remote_1mg_url,
}) => {
  return (
    <div key={pId} className="collection-item">
      <img className="image" src={img_url} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button className="custom-button">Add to Card</button>
    </div>
  );
};
export default Product_14;
