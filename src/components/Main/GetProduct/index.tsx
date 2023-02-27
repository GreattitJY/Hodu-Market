import React, { useEffect, useState } from "react";
import { useAxios } from "../../../export/api";
import { Product } from "../../../export/types/indext";

export default function GetProduct() {
  const [products, setProducts] = useState<Product[]>([]);

  const [productsPage, setPagePage] = useState(1);
  const { data, error, loading, fetchData } = useAxios({
    method: "get",
    url: `products/?page=${productsPage}`,
  });

  useEffect(() => {
    if (data) {
      setProducts(data.results);
      console.log(data.results);
    } else {
      setProducts([]);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  useEffect(() => {
    if (loading) {
      console.log("로딩중입니다.");
    }
  }, [loading]);

  return (
    <>
      {loading && <p>Loading...</p>}
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
    </>
  );
}
