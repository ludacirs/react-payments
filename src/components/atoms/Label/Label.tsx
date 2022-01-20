import React from "react";
import styled from "styled-components";
import { flexBox } from "@styles/mixin";

const LabelBlock = styled.label``;
const LabelInfo = styled.div`
  ${flexBox("space-between", "center")};
  width: 100%;
  color: #525252;
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
`;

interface LabelProps {
  children: React.ReactNode;
  title: string;
  letterLimit?: number;
  currentLetter?: number;
}

const Label = ({ children, title, letterLimit, currentLetter }: LabelProps) => {
  return (
    <LabelBlock>
      <LabelInfo>
        <div className="title">{title}</div>
        {letterLimit && (
          <div className="count">
            {currentLetter}/{letterLimit}
          </div>
        )}
      </LabelInfo>
      {children}
    </LabelBlock>
  );
};

export default Label;
