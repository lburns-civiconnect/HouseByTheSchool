import axios from "axios";

export const FETCH_CMS = "FETCH_CMS";
export const FETCH_COMPONENTS = "FETCH_COMPONENTS";

export const fetchCms = (slug, populate) => {
  console.log("Fetching: " + slug);
  return async (dispatch) => {
    try {
      // make request
      var config = {
        method: "get",
        url: `${process.env.REACT_APP_BACKEND_URL}/api/${slug}?${populate}`,
      };
      const response = await axios(config);

      //   dispatch action
      dispatch({
        type: FETCH_CMS,
        slug: slug,
        data: response.data.data,
      });
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };
};
