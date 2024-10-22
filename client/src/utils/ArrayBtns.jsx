export const generateBtns = (data) => {
  const btns = Array.from({ length: data }, (_, index) => {
    return index + 1;
  });
  return btns;
};
