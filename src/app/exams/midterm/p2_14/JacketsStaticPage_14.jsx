import Wrapper from "@/assets/wrappers/midterm/Shop_14";

const JacketsStaticPage_14 = () => {
  return (
    <Wrapper>
      <div className="shop-page">
        <div className="section-title">
          <h3>Jackets Static Page</h3>
          <h4 className="text-center text-[16px]">LIANGTINGLIN, 913410104</h4>
        </div>
        <div className="collection-page">
          <h1 className="title">Jackets</h1>
          <div className="items">
            <div className="collection-item">
              <img
                className="image"
                src="/images/midterm/jackets/black-shearling.png"
                alt="Black Shearling"
              />
              <div className="collection-footer">
                <span className="name">Black Shearling</span>
                <span className="price">125</span>
              </div>
              <button className="custom-button">Add to Cart</button>
            </div>
            <div className="collection-item">
              <img
                className="image"
                src="/images/midterm/jackets/blue-jean-jacket.png"
                alt="Blue Jean Jacket"
              />
              <div className="collection-footer">
                <span className="name">Blue Jean Jacket</span>
                <span className="price">90</span>
              </div>
              <button className="custom-button">Add to Cart</button>
            </div>
            <div className="collection-item">
              <img
                className="image"
                src="/images/midterm/jackets/brown-shearling.png"
                alt="Brown Shearling"
              />
              <div className="collection-footer">
                <span className="name">Brown Shearling</span>
                <span className="price">165</span>
              </div>
              <button className="custom-button">Add to Cart</button>
            </div>
            <div className="collection-item">
              <img
                className="image"
                src="/images/midterm/jackets/brown-trench.png"
                alt="Brown Trench"
              />
              <div className="collection-footer">
                <span className="name">Brown Trench</span>
                <span className="price">185</span>
              </div>
              <button className="custom-button">Add to Cart</button>
            </div>
            <div className="collection-item">
              <img
                className="image"
                src="/images/midterm/jackets/grey-jean-jacket.png"
                alt="Grey Jean Jacket"
              />
              <div className="collection-footer">
                <span className="name">Grey Jean Jacket</span>
                <span className="price">90</span>
              </div>
              <button className="custom-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default JacketsStaticPage_14;
