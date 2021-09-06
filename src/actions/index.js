export const plus = (num) => {
  return { type: "PLUS", payload: { countNum: num } };
};

export const minus = (num) => {
  return { type: "MINUS", payload: { countNum: num } };
};
