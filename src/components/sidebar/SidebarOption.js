import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGames, selectedCategoryGames } from "../../features/appSlice";
import styled from "styled-components";

const SidebarOption = ({ id, nameKey, games, index }) => {
  console.log(games);
  const dispatch = useDispatch();
  const allGames = useSelector(selectGames);
  const selectCategory = () => {
    let filteredGames = [];
    if (games) {
      games.forEach((item) => {
        allGames.forEach((el) => {
          if (item.id === el.id) {
            filteredGames.push({ ...el, top: item.top });
          }
        });
      });
    }

    dispatch(selectedCategoryGames({ filteredGames }));
  };
  return (
    <SidebarOptionContainer onClick={selectCategory}>
      <SidebarOptionChannel>
        <h3>{nameKey}</h3>
      </SidebarOptionChannel>
    </SidebarOptionContainer>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
  padding-left: 10px;
  font-weight: bold;
  border-left: 7px solid var(--sidebar-color);
  border-radius: 1px 0 0 1px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    color: rgb(135, 10, 252);
    border-left: 7px solid rgb(135, 10, 252);
    border-radius: 1px 0 0 1px;
    transition: 0.2s ease;
  }
  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-weight: 300;
  > h3 {
    margin-left: 20px;
  }
`;
