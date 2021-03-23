import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SidebarOption from "./SidebarOption";
import gameService from "../../services/index";
import {
  selectCategories,
  selectedFavorites,
  setData,
} from "../../features/appSlice";
import styled from "styled-components";
import SidebarHeader from "./SidebarHeader";

function Sidebar() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const favorites = useSelector(selectedFavorites);

  useEffect(() => {
    gameService.getAllGames().then((data) => dispatch(setData({ data })));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SidebarContainer>
      <SidebarHeader />
      <SidebarOptions>
        {categories
          ? categories.map((category, index) => {
              return (
                <SidebarOption
                  key={category.id}
                  id={category.id}
                  games={
                    category.nameKey === "Favorites"
                      ? favorites
                      : category.games
                  }
                  index={index}
                  nameKey={category.nameKey}
                />
              );
            })
          : null}
      </SidebarOptions>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.aside`
  background-image: linear-gradient(180deg, #a9c9ff 0%, #dacbee 100%);
  color: #4c545f;
  flex: 0.4;
  border-radius: 45px;
  max-width: 300px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  > hr {
    border: 1px solid #49274b;
  }
`;
const SidebarOptions = styled.div``;
