import React from "react";
import styled from "styled-components";
import { flexBox } from "@styles/mixin";

const LabelBlock = styled.label<Pick<LabelProps, "width">>`
  width: ${({ width }) => width}px;
`;
const LabelInfo = styled.div`
  ${flexBox("space-between", "center")};
  width: inherit;
  > * {
    margin-bottom: 4px;
    font-size: 12px;
    line-height: 14px;
    font-weight: 500;
    color: #525252;
  }
`;

export interface LabelProps {
  children: React.ReactNode;
  label: string;
  letterLimit?: number;
  letterCount?: number;
  width: number;
}

const Label = ({ children, label, letterLimit, letterCount = 0, width }: LabelProps) => {
  return (
    <LabelBlock width={width}>
      <LabelInfo>
        <div className="label">{label}</div>
        {letterLimit && (
          <div className="count">
            {letterCount}/{letterLimit}
          </div>
        )}
      </LabelInfo>
      {children}
    </LabelBlock>
  );
};

export default Label;
