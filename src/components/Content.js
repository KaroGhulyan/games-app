import React from "react";
import { useSelector } from "react-redux";
import { selectedCategory } from "../features/appSlice";
import ContenItem from "./ContenItem";
import styled from "styled-components";

const Content = () => {
  let games = useSelector(selectedCategory);
  let largeImages = games.filter((item) => item.top);
  let smallImages = games.filter((item) => !item.top);

  return (
    <ContentContainer>
      <MainContent className="">
        <LargeImgesContainer className="">
          {largeImages
            ? largeImages.map((game, index) => {
                return (
                  <ContenItem
                    id={game.id}
                    img={game.img}
                    name={game.name}
                    key={game.id}
                    top={game.top}
                  />
                );
              })
            : null}
        </LargeImgesContainer>
        <SmallImagesContainer className="">
          {smallImages
            ? smallImages.map((game, index) => {
                return (
                  <ContenItem
                    id={game.id}
                    img={game.img}
                    name={game.name}
                    key={game.id}
                    top={game.top}
                  />
                );
              })
            : null}
        </SmallImagesContainer>
      </MainContent>
    </ContentContainer>
  );
};

export default Content;

const ContentContainer = styled.div`
  flex: 0.8;
  width: 100%;
  height: 100%;
  padding: 50px;
  flex-wrap: nowrap;
  padding: 20px 0px;
  background-color: white;
  border-radius: 0 45px 45px 0;
`;

const MainContent = styled.div`
  display: grid;
  flex-grow: 1;
  overflow: auto;
  width: 100%;
  height: 100%;
  grid-template-columns: 2fr 1fr;
`;
const LargeImgesContainer = styled.div`
  text-align: center;
`;
const SmallImagesContainer = styled.div``;
