import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageurl={imageUrl} />
      <Body to={route} className="directory-item-body">
        <h2>{title.toUpperCase()}</h2>
        <p>상품보기</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
