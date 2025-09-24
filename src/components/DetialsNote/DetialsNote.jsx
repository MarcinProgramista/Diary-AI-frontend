import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { CDate, getCategoryFromPath } from "../../utils/categoryUtils";
import StyledTitle from "../ui/StyledTitle/StyledTitle";
import Spinner from "../ui/Spinner/Spinner";
import axios from "../../api/axios";
import API_CONFIG from "../../config/api";
import WrapperNotesDetails from "../ui/WrapperNotesDetails/WrapperNotesDetails";
import InnerWrapperNotesDetails from "../ui/InnerWrapperNotesDetails/InnerWrapperNotesDetails";
import DateNotesDetails from "../ui/DateNotesDetails/DateNotesDetails";

const DetialsNote = () => {
  const [note, setNote] = useState();
  const location = useLocation();
  const [playerData, setPlayerData] = useState(null);
  const axiosPrivate = useAxiosPrivate();
  const params = useParams();
  const note_id = params.id;

  useEffect(() => {
    let isMounted = true;

    const controller = new AbortController();

    const getNote = async () => {
      try {
        const response = await axios.get(
          `${API_CONFIG.ENDPOINTS.NOTES_DETAILS}/${note_id}`,
          {
            signal: controller.signal,
          }
        );

        isMounted && setNote(response.data);

        if (isMounted && !controller.signal.aborted) {
          setNote(response.data);
          let timeout = 300;
          setTimeout(() => {
            setPlayerData(!playerData);
          }, timeout);
        }
        controller.abort();
      } catch (err) {
        if (!controller.signal.aborted && isMounted) {
          console.error("Failed to fetch companies:", err);
        }
      }
    };

    getNote();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  if (!playerData) {
    return <Spinner />;
  }

  return (
    <>
      <WrapperNotesDetails $category={getCategoryFromPath(location.pathname)}>
        <InnerWrapperNotesDetails
          $category={getCategoryFromPath(location.pathname)}
        >
          <StyledTitle
            $datails
            $category={getCategoryFromPath(location.pathname)}
          >
            {note?.title}
          </StyledTitle>
          <DateNotesDetails>{CDate(note)}</DateNotesDetails>
        </InnerWrapperNotesDetails>
      </WrapperNotesDetails>
    </>
  );
};

export default DetialsNote;
