import axios from "axios";

export const plus = (num) => {
  return { type: "PLUS", payload: { countNum: num } };
};

export const minus = (num) => {
  return { type: "MINUS", payload: { countNum: num } };
};

export const asyncMinus = (num) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "MINUS", payload: { countNum: num } });
    }, 1000);
  };
};

export const changeTitle = (cTitle) => {
  return { type: "CHANGE_TITLE", payload: { title: cTitle } };
};

export const getJson = () => {
  return (dispatch) => {
    dispatch({ type: "WAIT" });
    const url = "https://jsondata.okiba.me/v1/json/qyknq210903055347";
    axios.get(url).then((res) => {
      // console.log(res.data);
      dispatch(changeTitle(res.data.member[0].name));
    });
  };
};
