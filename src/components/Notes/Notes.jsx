import React, { useCallback, useEffect, useState } from "react";
import { getCategoryFromPath } from "../../utils/categoryUtils";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import WrapperNoets from "../ui/WrapperNotes/WrapperNotes";
import plusIcon from "../../assets/plus-svgrepo-com.png";
import StyledButtonIcon from "../ui/StyledButtonIcon/StyledButtonIcon";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import API_CONFIG from "../../config/api";
import NotesList from "../ui/NotesList/NoteList";
import StyledParagraphInfo from "../ui/StyledParagraphInfo/StyledParagraphInfo";
import WrapperNote from "../ui/WrapperNote/WrapperNote";
import StyledTitle from "../ui/StyledTitle/StyledTitle";
import WrapperCard from "../ui/WrapperCard/WrapperCard";

const Notes = () => {
  const [notes, setNotes] = useState();
  const [buttonShown, setButtonShown] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const category_id = params.category_id;
  const location = useLocation();
  const axiosPrivate = useAxiosPrivate();
  const categoryName = getCategoryFromPath(location.pathname);
  //console.log(category_id);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getNotes = async () => {
      try {
        const response = await axiosPrivate.get(
          `${API_CONFIG.ENDPOINTS.NOTES}/${category_id}`,
          { signal: controller.signal }
        );

        if (isMounted && !controller.signal.aborted) {
          setNotes(response.data);
          setButtonShown(false);
        }
      } catch (err) {
        if (!controller.signal.aborted && isMounted) {
          console.error("Failed to fetch notes:", err);
          navigate("/login", { state: { from: location }, replace: true });
        }
      }
    };

    getNotes();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [category_id, axiosPrivate, navigate, location]);
  const formatDate = useCallback((dateString) => {
    if (dateString.length === 10) {
      return new Date(dateString).toLocaleDateString("pl-PL");
    }
    return new Date(dateString).toLocaleDateString("pl-PL");
  }, []);

  function toggle() {
    setButtonShown((buttonShown) => !buttonShown);
  }

  //console.log(notes);

  return (
    <>
      {notes?.length > 0 && (
        <h4>
          <StyledParagraphInfo>
            Number of {categoryName}: {notes.length}
          </StyledParagraphInfo>
        </h4>
      )}
      <WrapperNoets>
        <NotesList>
          {notes?.length > 0 ? (
            notes.map((note) => (
              <WrapperNote key={note.id}>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`${location.pathname}/note/${note.id}`}
                  key={note.id}
                ></NavLink>
              </WrapperNote>
            ))
          ) : (
            <StyledTitle $category={categoryName}>
              No notes found this category.
            </StyledTitle>
          )}
        </NotesList>
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
