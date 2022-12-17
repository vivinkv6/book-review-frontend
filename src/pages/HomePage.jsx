import React from "react";

import ImageSlider from "../components/ImageSlider";
import Cards from "../components/Cards";

function HomePage({ data, error, loading }) {
  console.log(data);
  return (
    <>
      {/*<ImageSlider data={data} error={error} loading={loading} /> */}
      <Cards data={data} />
    </>
  );
}

export default HomePage;
