import React from "react";
import { getCategoryFromPath } from "../../utils/categoryUtils";
import { useLocation } from "react-router-dom";

const Notes = () => {
  const location = useLocation();
  const categoryName = getCategoryFromPath(location.pathname);
  console.log(categoryName);
  return <div></div>;
};

export default Notes;
