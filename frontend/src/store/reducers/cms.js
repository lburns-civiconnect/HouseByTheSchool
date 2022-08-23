import { FETCH_CMS } from "../actions/cms";

const initialState = {
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CMS:
      let config = { ...state, data: { ...state.data } };
      config.data[action.slug] = action.data;
      return config;

    default:
      return state;
  }
};
