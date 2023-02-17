import React from "react";
import { Stack } from "@mui/material";


import { categories } from "../utils/constants";


const Categories = ({ selectedCategory, setSelectedCategory }) => (
 
  <Stack
    direction="row"
    sx={{
        px:2,
      overflowY: "auto",
      height: { sx: "auto", md: "92vh" },
      flexDirection: { md: "column" },
     
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#f1f1f1",
          color: "#f1f1f1",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "black" : "#f1f1f1", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ color: category.name === selectedCategory ? "black" : "#f1f1f1" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;