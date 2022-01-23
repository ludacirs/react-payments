import React from "react";
import styled from "styled-components";
import { flexBox } from "@styles/mixin";

const HeaderBlock = styled.div`
  ${flexBox("flex-start", "center", "row")};
  > * {
    ${flexBox(null, "center")};
    padding: 0 5px;
  }
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  color: #383838;
`;

interface HeaderProps {
  backButton: boolean;
  title: string;
}

const Header = ({ backButton, title }: HeaderProps) => {
  return (
    <HeaderBlock>
      <button>{backButton && "<"}</button>
      <div className={"title"}>{title}</div>
    </HeaderBlock>
  );
};

export default Header;
