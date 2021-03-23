import React from "react";
import Content from "./components/Content";
import Sidebar from "./components/sidebar/Sidebar";
import styled from "styled-components";

function App() {
  return (
    <AppBody>
      <Sidebar />
      <Content />
    </AppBody>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  width: 70vw;
  height: 70vh;
  background-color: white;
  border-radius: 60px;
  border: 15px solid rgba(255, 255, 255, 0.37);
  background-clip: padding-box;
`;
