import React, { useState } from "react";
import Header from "./header";
import "../css/mainPage.css";
import Blogs from "./Blogs";

const MainPage = () => {
  const [filterId, setFilterId] = useState({});

  const manageFilter = (filterId) => {
    setFilterId(filterId);
  };
  return (
    <div className="mp-container">
      <Header manageFilter={manageFilter} />
      <div className="mp-content">
        <Blogs filterId={filterId} />
      </div>
    </div>
  );
};
export default MainPage;

//   <div className="mp-content">
//     <Blogs />
//   </div>
