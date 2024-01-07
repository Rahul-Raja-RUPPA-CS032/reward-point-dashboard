const range = (start: number, end: number) => {
  const length = end + 1 - start;
  return Array.from({ length }, (_, i) => start + i);
};
export const paginationArrayConstructor = (
  currentPage: number,
  totalPage: number
) => {
  if (totalPage <= 2) return range(1, totalPage);
  else if (currentPage === 1) return range(1, 3);
  else if (currentPage === 10) return range(8, 10);
  else if (currentPage == totalPage) return range(currentPage - 2, totalPage);
  else return range(currentPage - 1, currentPage + 1);
};
