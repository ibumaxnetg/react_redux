const title = (state = "てすとたいとる", action) => {
  switch (action.type) {
    case "WAIT":
      return "Wait";

    case "CHANGE_TITLE":
      return action.payload.title;

    default:
      return state;
  }
};

export default title;
