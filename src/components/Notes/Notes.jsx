import React, { useCallback, useState } from "react";
import { getCategoryFromPath } from "../../utils/categoryUtils";
import { useLocation, useParams } from "react-router-dom";
import WrapperNoets from "../ui/WrapperNotes/WrapperNotes";
import plusIcon from "../../assets/plus-svgrepo-com.png";
import StyledButtonIcon from "../ui/StyledButtonIcon/StyledButtonIcon";

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

  function toggle() {
    setButtonShown((buttonShown) => !buttonShown);
  }
  return (
    <>
      <WrapperNoets>
        <StyledButtonIcon
          $icon={plusIcon}
          $category={categoryName}
          onClick={toggle}
        ></StyledButtonIcon>
      </WrapperNoets>
    </>
  );
};

export default Notes;
