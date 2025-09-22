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
const Home = () => {
  const categoryName = getCategoryFromPath(location.pathname);
  console.log(categoryName);

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
