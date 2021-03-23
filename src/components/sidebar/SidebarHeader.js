import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { filterGamesBySearch } from "../../features/appSlice";

const SidebarHeader = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    dispatch(filterGamesBySearch({ searchTerm }));
  }, [searchTerm]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SidebarHeaderContainer>
      <div className="input-group input-group-lg px-2 py-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </SidebarHeaderContainer>
  );
};

export default SidebarHeader;

const SidebarHeaderContainer = styled.div`
  display: flex;
  padding: 13px;
`;
