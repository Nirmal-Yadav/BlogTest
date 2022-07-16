import React, { useState } from "react";
import "../css/header.css";
import HomeIcon from "@mui/icons-material/Home";
import BackupIcon from "@mui/icons-material/Backup";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";

const Header = ({ manageFilter }) => {
  const [filterId, setFilterId] = useState({ id: null, state: false });
  const blogFilter = (e) => {
    setFilterId({ ...filterId, id: e.target.value, state: true });
    manageFilter(filterId);
  };
  return (
    <div className="header-container">
      <div className="h-logo">NBlog</div>
      <div className="h-search-container">
        <input type="text" className="h-input" />
        <SearchIcon
          onClick={(e) => {
            blogFilter(e);
          }}
        />
      </div>
      <div className="h-icon-container">
        <HomeIcon />
        <BackupIcon />
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};
export default Header;
