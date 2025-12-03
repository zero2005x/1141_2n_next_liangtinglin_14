"use client";

import Wrapper from "../../_wrapper/Shop_14";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Product_14 from "../../_components/Product_14";
import { supabase } from "@/lib/supabaseClient";

const FetchShopByCategory_14 = () => {
  const [shop_14, setShop_14] = useState([]);
  const params = useParams();
  const category = params.category;
  console.log("category from params:", category);

  const fetchShopFromSupa = async () => {
    try {
      let { data: categoryData, error: categoryError } = await supabase
        .from("category2_14")
        .select("cid")
        .eq("cname", category)
        .single();

      if (categoryError) throw categoryError;

      if (categoryData) {
        const cid = categoryData.cid;
        let { data: shopData, error: shopError } = await supabase
          .from("shop2_14")
          .select("*")
          .eq("cat_id", cid);

        if (shopError) throw shopError;

        console.log("Fetched shop data:", shopData);
        setShop_14(shopData);
      }
    } catch (error) {
      console.error("Error fetching shop data:", error);
    }
  };
  useEffect(() => {
    fetchShopFromSupa();
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
