import React from "react";
import Box from "./Box";
import Data from "./Data";

const Home = () => {
  return (
    <div className="home">
      <br />
      {Data?.map((item) => (
        <Box
          key={item.id}
          img={item?.img}
          heading={item?.heading}
          body={item?.body}
        />
      ))}
    </div>
  );
};

export default Home;
