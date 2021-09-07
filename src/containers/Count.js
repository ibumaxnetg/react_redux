import { connect } from "react-redux";

import AppPreview from "../components/AppPreview";
import { plus, minus, asyncMinus, getJson } from "../actions";

const mapStateToProps = (state) => {
  return {
    number: state.number,
    title: state.title,
    days: state.days
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plus: (num) => {
      dispatch(plus(num));
    },
    minus: (num) => {
      dispatch(minus(num));
    },
    asyncMinus: (num) => {
      dispatch(asyncMinus(num));
    },
    getJson: () => {
      dispatch(getJson());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppPreview);
