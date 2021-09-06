export const reducer = (state = 0, action) => {
  switch (action.type) {
    case "PLUS":
      return state + action.payload.countNum;

    case "MINUS":
      return state - action.payload.countNum;

    default:
      return;
  }
};
