import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { strapiEndpoints } from "./endpoints";
import Navigation from "./navigation/Navigation";
import * as CmsActions from "./store/actions/cms";

function App() {
  const dispatch = useDispatch();

  // fetch all data on app load
  useEffect(() => {
    strapiEndpoints.forEach((el) => dispatch(CmsActions.fetchCms(el.slug, el.populate)));
  }, []);

  return <Navigation />;
}

export default App;
