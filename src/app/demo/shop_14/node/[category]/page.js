"use client";

import Wrapper from "../../_wrapper/Shop_14.jsx";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Product_14 from "../../_components/Product_14.jsx";

const FetchShopByCategory_14 = () => {
  const [shop_14, setShop_14] = useState([]);
  const params = useParams();
  const category = params.category;
  console.log("category from params:", category);

  const fetchShopFromNode = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/shop_14/${category}`
      );
      const data = await response.json();
      console.log("Fetched shop data:", data);
      if (response.ok) {
        setShop_14(data);
      }
    } catch (error) {
      console.error("Error fetching shop data:", error);
    }
  };
  useEffect(() => {
    fetchShopFromNode();
  }, [category]);

  return (
    <Wrapper>
      <div className="shop-page">
        <div className="section-title">
          <h4 className="text-center text-[16px]">LIANGTINGLIN, 913410104</h4>
        </div>
        <div className="collection-page">
          <h1 className="title">{category}</h1>
          <div className="items">
            {shop_14.map((item) => {
              const { pid, pname, img_url } = item;
              return (
                <Product_14
                  key={pid}
                  pid={pid}
                  pname={pname}
                  img_url={img_url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FetchShopByCategory_14;
