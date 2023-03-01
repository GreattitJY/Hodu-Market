import React from "react";
import { PageNationProps } from "../../../../export/interface";
import { PageNationContainer, PageNumberBtn } from "./PageNationStyle";

export default function PageNation({ maxPage, productsPage, setProductsPage, data }: PageNationProps) {
  // const [isActive, setIsActive] = useState<boolean>(false);

  const handlePrevPage = () => {
    if (!data.previous) return;

    setProductsPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (!data.next) return;

    setProductsPage((prev) => prev + 1);
  };

  return (
    <PageNationContainer>
      <button onClick={() => setProductsPage(1)}>&lt;&lt;</button>
      <button onClick={handlePrevPage}>&lt;</button>
      {Array(maxPage)
        .fill(0)
        .map((_, i) => (
          <PageNumberBtn key={i} onClick={() => setProductsPage(i + 1)} {...{ productsPage }} data-page={i + 1}>
            {i + 1}
          </PageNumberBtn>
        ))}
      <button onClick={handleNextPage}>&gt;</button>
      <button onClick={() => setProductsPage(maxPage)}>&gt;&gt;</button>
    </PageNationContainer>
  );
}
