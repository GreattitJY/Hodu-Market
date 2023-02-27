import React, { useEffect, useState } from "react";
import axios from "axios";

export type Product = {
  product_id: number;
  product_name: string;
  seller: number;
  seller_store: string;
  image: string;
  price: number;
  shipping_method: string;
  shipping_fee: number;
  stock: number;
  products_info: string;
};

export default function Main() {
  const [products, setProducts] = useState<Product[]>([]);

  const getProductList = async () => {
    try {
      const res = await axios.get(`https://openmarket.weniv.co.kr/products`);

      if (res.status !== 200) return;

      setProducts((prev) => [...prev, ...res.data.results]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductList();
    console.log(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <ul>
        {products.length
          ? products.map((product, idx) => {
              if (idx > 5) return null;
              return (
                <li key={idx}>
                  <img src={product["image"]} alt="" />
                </li>
              );
            })
          : null}
      </ul>
    </main>
  );
}
