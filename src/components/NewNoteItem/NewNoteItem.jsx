import { useContext, useState } from "react";
import WrapperNewNoteItem from "../WrapperNewNoteItem/WrapperNewNoteItem";
import StyledTitle from "../ui/StyledTitle/StyledTitle";
import { useParams } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import NewItemInput from "../ui/NewItemInput/NewItemInput";
const NewNoteItem = ({ $category, $buttonShown }) => {
  const { auth, setAuth } = useContext(AuthContext);
  const [inputTitleValue, setInputTitleValue] = useState("");
  const [inputLinkValue, setInputLinkValue] = useState("");
  const [content, setContent] = useState("");
  const params = useParams();
  const category_id = params.category_id;
  const user_id = parseInt(JSON.parse(auth.id));
  const [userId, setUserId] = useState(user_id);
  const [categoryId, setCategoryId] = useState(category_id);
  const [currentDate, setCurrentDate] = useState(CDate());

  function CDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return day + "." + month + "." + year;
  }

  return (
    <form>
      <WrapperNewNoteItem $category={$category} $buttonShown={$buttonShown}>
        <StyledTitle $category={$category} $buttonShown={$buttonShown}>
          Creart new item in {$category}
        </StyledTitle>
        <NewItemInput
          $category={$category}
          placeholder="title"
          name="title"
          id="title"
          value={inputTitleValue}
          onChange={(event) => {
            setInputTitleValue(event.target.value);
          }}
        />
        {($category === "Films" || $category === "Books") && (
          <NewItemInput
            $category={$category}
            placeholder={`Put link to cover of ${$category}`}
            name="link"
            id="link"
            value={inputLinkValue}
            onChange={(event) => {
              setInputLinkValue(event.target.value);
            }}
          />
        )}
      </WrapperNewNoteItem>
    </form>
  );
};

export default NewNoteItem;
