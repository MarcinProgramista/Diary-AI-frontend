import StyledNavbar from "../ui/StyledNavbar/StyledNavbar";
import StyledParagraph from "../ui/StyledParagraph/StyledParagraph";
import StyledLink from "../ui/StyledLink/StyledLink";
import Books from "../../assets/books-svgrepo-com.png";
import Films from "../../assets/video-svgrepo-com.png";
import Notes from "../../assets/pen-nib-svgrepo-com.png";
import HomeIcon from "../../assets/home-1-svgrepo-com.png";
import LogoutIcon from "../../assets/logout-bracket-svgrepo-com.png";
import { getCategoryFromPath } from "../../utils/categoryUtils";
import StyledCategory from "../ui/StyledCategory/StyledCategory";
import ButtonIcon from "../ui/ButtonIcon/ButtonIcon";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";

const Home = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  const user_id = parseInt(JSON.parse(auth.id));
  const [categories, setCategories] = useState();
  const axiosPrivate = useAxiosPrivate();
  const location = useLocation();
  const categoryName = getCategoryFromPath(location.pathname);
  //console.log(categoryName);
  useEffect(() => {
    let isMounted = true;

    const controller = new AbortController();

    const getCategires = async () => {
      try {
        const response = await axiosPrivate.get(
          `/api/categories/user/${user_id}`,
          {
            signal: controller.signal,
          }
        );

        isMounted && setCategories(response.data);
        controller.abort();
      } catch (err) {
        console.log(err);
        navigate("/login", { state: { from: location }, replace: true });
      }
    };

    getCategires();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [user_id]);

  return (
    <StyledNavbar>
      <StyledParagraph>
        <StyledLink to="/home">
          {({ isActive }) => (
            <StyledParagraph>
              <ButtonIcon
                $icon={HomeIcon}
                $active={isActive}
                $category="Home"
              ></ButtonIcon>

              <StyledCategory $category="Home" $active={isActive}>
                Home
              </StyledCategory>
            </StyledParagraph>
          )}
        </StyledLink>
      </StyledParagraph>
    </StyledNavbar>
  );
};

export default Home;
