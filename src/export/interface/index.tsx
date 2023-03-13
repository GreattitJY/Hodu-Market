export interface PageNationProps {
  maxPage: number;
  productsPage: number;
  setProductsPage: React.Dispatch<React.SetStateAction<number>>;
  data: {
    previous: number | null;
    next: number | null;
  };
}
export interface PageNationBtnProps {
  productsPage: number;
}

export interface LoginStyleBtnProps {
  isBuyer: boolean;
}
