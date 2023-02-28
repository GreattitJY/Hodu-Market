export interface PageNationProps {
  maxPage: number;
  setProductsPage: React.Dispatch<React.SetStateAction<number>>;
  data: {
    previous: number | null;
    next: number | null;
  };
}
