import React, { useEffect, useState } from "react";
import { useAxios } from "../../../export/api";
import { Product } from "../../../export/types/indext";
import {
  // ImgBox,
  // ImgWrap,
  ProductImg,
  ProductList,
  ProductName,
  ProductPrice,
  StoreName,
  TextContainer,
} from "./GetProductStyle";
import PageNation from "./PageNation";

export default function GetProduct() {
  const [products, setProducts] = useState<Product[]>([]);

  const [productsPage, setProductsPage] = useState(1);
  const { data, error, loading, fetchData } = useAxios({
    method: "get",
    url: `products/?page=${productsPage}`,
  });

  const [maxPage, setMaxPage] = useState<number | null>(null);

  useEffect(() => {
    if (data) {
      setProducts(data.results);
      setMaxPage(Math.ceil(data.count / 15));
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
      // console.log("로딩중입니다.");
    }
  }, [loading]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsPage]);

  return (
    <>
      {/* {loading && <p>Loading...</p>} */}
      <ProductList>
        {products.length
          ? products.map((product, idx) => {
              return (
                <li key={idx}>
                  {/* <ImgWrap> */}
                  {/* <ImgBox img={product["image"]}> */}
                  <ProductImg src={product["image"]} alt="" />
                  {/* </ImgBox>
                  </ImgWrap> */}
                  <TextContainer>
                    <StoreName>{product["store_name"]}</StoreName>
                    <ProductName>{product["product_name"]}</ProductName>
                    <ProductPrice>
                      <strong>{product["price"].toLocaleString()}</strong>
                      <span>원</span>
                    </ProductPrice>
                  </TextContainer>
                </li>
              );
            })
          : null}
      </ProductList>
      {maxPage ? <PageNation {...{ maxPage }} {...{ productsPage }} {...{ setProductsPage }} {...{ data }} /> : null}
    </>
  );
}
