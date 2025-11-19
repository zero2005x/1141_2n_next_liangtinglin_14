import Wrapper from "@/assets/wrappers/midterm/Shop_14";

const MensStaticPage_14 = () => {
  return (
    <Wrapper>
      <div className="shop-page">
        <div className="section-title">
          <h3>Mens Static Page</h3>
          <h4 className="text-center text-[16px]">LIANGTINGLIN, 913410104</h4>
        </div>
        <div className="collection-page">
          <h1 className="title">Mens</h1>
          <div className="items">
            <div className="collection-item">
              <img
                className="image"
                src="/images/midterm/mens/camo-vest.png"
                alt="Camo Vest"
              />
              <div className="collection-footer">
                <span className="name">Camo Vest</span>
                <span className="price">325</span>
              </div>
              <button className="custom-button">Add to Cart</button>
            </div>
            <div className="collection-item">
              <img
                className="image"
                src="/images/midterm/mens/floral-shirt.png"
                alt="Floral Shirt"
              />
              <div className="collection-footer">
                <span className="name">Floral Shirt</span>
                <span className="price">20</span>
              </div>
              <button className="custom-button">Add to Cart</button>
            </div>
            <div className="collection-item">
              <img
                className="image"
                src="/images/midterm/mens/long-sleeve.png"
                alt="Long Sleeve"
              />
              <div className="collection-footer">
                <span className="name">Long Sleeve</span>
                <span className="price">25</span>
              </div>
              <button className="custom-button">Add to Cart</button>
            </div>
            <div className="collection-item">
              <img
                className="image"
                src="/images/midterm/mens/pink-shirt.png"
                alt="Pink Shirt"
              />
              <div className="collection-footer">
                <span className="name">Pink Shirt</span>
                <span className="price">25</span>
              </div>
              <button className="custom-button">Add to Cart</button>
            </div>
            <div className="collection-item">
              <img
                className="image"
                src="/images/midterm/mens/polka-dot-shirt.png"
                alt="Polka Dot Shirt"
              />
              <div className="collection-footer">
                <span className="name">Polka Dot Shirt</span>
                <span className="price">25</span>
              </div>
              <button className="custom-button">Add to Cart</button>
            </div>
            <div className="collection-item">
              <img
                className="image"
                src="/images/midterm/mens/roll-up-jean-shirt.png"
                alt="Roll Up Jean Shirt"
              />
              <div className="collection-footer">
                <span className="name">Roll Up Jean Shirt</span>
                <span className="price">40</span>
              </div>
              <button className="custom-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MensStaticPage_14;
