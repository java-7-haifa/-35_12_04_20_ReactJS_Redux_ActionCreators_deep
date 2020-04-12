import * as Types from "./actions/actionTypes";

const initState = {
  count: 0,
};

export function counterReducer(state = initState, action) {
  switch (action.type) {
    case Types.INC:
      return { ...state, count: state.count + 1 };
    case Types.DEC:
      return { ...state, count: state.count - 1 };
    case Types.ADD_N:
      return { ...state, count: state.count + action.num };
    case Types.SUB_N:
      return { ...state, count: state.count - action.num };
    default:
      return state;
  }
}
