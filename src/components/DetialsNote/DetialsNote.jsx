import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const DetialsNote = () => {
  const [note, setNote] = useState();
  const location = useLocation();
  const axiosPrivate = useAxiosPrivate();
  const params = useParams();
  const note_id = params.id;

  return (
    <div>
      <h1>DetialsNote</h1>
    </div>
  );
};

export default DetialsNote;
