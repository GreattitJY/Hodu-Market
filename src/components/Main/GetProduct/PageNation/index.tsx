import React from "react";
import { PageNationProps } from "../../../../export/interface";
import { ProductPageBtn } from "./PageNationStyle";

export default function PageNation({ maxPage, setProductsPage, data }: PageNationProps) {
  const handlePrevPage = () => {
    if (!data.previous) return;

    setProductsPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (!data.next) return;

    setProductsPage((prev) => prev + 1);
  };

  return (
    <>
      <ProductPageBtn onClick={() => setProductsPage(1)}>&lt;&lt;</ProductPageBtn>
      <ProductPageBtn onClick={handlePrevPage}>&lt;</ProductPageBtn>
      {Array(maxPage)
        .fill(0)
        .map((_, i) => (
          <ProductPageBtn key={i} onClick={() => setProductsPage(i + 1)}>
            {i + 1}
          </ProductPageBtn>
        ))}
      <ProductPageBtn onClick={handleNextPage}>&gt;</ProductPageBtn>
      <ProductPageBtn onClick={() => setProductsPage(maxPage)}>&gt;&gt;</ProductPageBtn>
    </>
  );
}
