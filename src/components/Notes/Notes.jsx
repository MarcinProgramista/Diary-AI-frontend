import React, { useCallback, useState } from "react";
import { getCategoryFromPath } from "../../utils/categoryUtils";
import { useLocation, useParams } from "react-router-dom";

const Notes = () => {
  const [notes, setNotes] = useState();
  const [buttonShown, setButtonShown] = useState(false);
  const params = useParams();
  const category_id = params.category_id;
  const location = useLocation();
  const categoryName = getCategoryFromPath(location.pathname);
  //console.log(category_id);

  const formatDate = useCallback((dateString) => {
    if (dateString.length === 10) {
      return new Date(dateString).toLocaleDateString("pl-PL");
    }
    return new Date(dateString).toLocaleDateString("pl-PL");
  }, []);
  return <></>;
};

export default Notes;
