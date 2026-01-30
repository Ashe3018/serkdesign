import React from "react";
import Button from "./Button";
import { SkipNextOutlined, SkipPreviousOutlined } from "@mui/icons-material";

const ButtonPage = ({
  value,
  setValue,
  currentPage,
  setCurrentPage,
  dataLength,
}) => {
  const pages = [10, 20, 50, 100];
  return (
    <div
      style={{ justifyItems: "end" }}
      className="float-end flex mr-3 pr-3 my-2 space-x-3"
    >
      <label htmlFor="pages" className="text-xl">
        Pages
      </label>
      <select
        name="pages"
        id="pages"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          height: "30px",
          width: "55px",
          padding: "0",
          paddingLeft: "5px",
          borderRadius: "5px 5px 5px",
        }}
      >
        {pages?.map((page) => (
          <option value={page} key={page}>
            {page}
          </option>
        ))}
      </select>
      <Button
        onClick={(e) => {
          if (currentPage >1) setCurrentPage(currentPage - 1);
        }}
        className="w-9 md:w-28 "
        size="none"
        variant="info"
      >
        <div>
          {<SkipPreviousOutlined />}
          <span className="hidden md:flex float-right pr-3">Previous</span>
        </div>
      </Button>
      <p className="text-xl mt-1">{currentPage}</p>
      <Button
        onClick={(e) => {
          if (currentPage * value < dataLength) setCurrentPage(currentPage + 1);
        }}
        className="w-9 md:w-20"
        size="none"
        variant="info"
      >
        <div>
          <span className="hidden md:flex float-left pl-3">Next</span>
          {<SkipNextOutlined />}
        </div>
      </Button>
    </div>
  );
};

export default ButtonPage;
