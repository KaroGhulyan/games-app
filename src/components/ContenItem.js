import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedFavoritesGames,
  selectCategories,
  deleteFromFavourites,
} from "../features/appSlice";

const ContenItem = ({ name, id, img, top }) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const handleSelect = async () => {
    await setSelected(!selected);
    if (!selected) {
      let game = {
        id,
        top,
      };

      return dispatch(selectedFavoritesGames({ game }));
    }
    dispatch(deleteFromFavourites({ gameId: id }));
  };

  return (
    <ContentItemContainer top={top} selected={selected} onClick={handleSelect}>
      <span>
        <HeartIcon icon={faHeart} />
      </span>
      {
        <img
          className="img-fluid"
          src={top ? img.large : img.small}
          alt={name}
        />
      }
    </ContentItemContainer>
  );
};

export default ContenItem;

const ContentItemContainer = styled.div`
  display: inline-block;
  width: ${({ top }) => (top ? "200px" : "100px")};
  height: ${({ top }) => (top ? "200px" : "100px")};
  position: relative;
  cursor: pointer;
  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: grey;
    opacity: 0.3;
  }
  & {
    background-color: grey;
    opacity: ${({ selected }) => (selected ? 0.7 : 1)};
  }
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  > span {
    visibility: ${({ selected }) => (selected ? "visible" : "hidden")};
    position: absolute;
    top: 40%;
    right: 60%;
    transform: translate(-50%, -50%);
  }
`;
const HeartIcon = styled(FontAwesomeIcon)`
  color: red;
  font-size: 30px;
  position: absolute;
`;
