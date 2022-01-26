import React from "react";
import styled from "styled-components";
import { flexBox } from "@styles/mixin";

const CardBlock = styled.div`
  ${flexBox("center", "center", "column")};
  margin: 10px 0;
  padding: 0 10px;
  width: 208px;
  height: 130px;

  font-size: 14px;
  color: #575757;

  background: #e5e5e5;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  user-select: none;

  .card-top {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
  }
  .card-middle {
    margin-left: 30px;
    width: 100%;
    height: 100%;
    .chip {
      width: 40px;
      height: 26px;
      left: 95px;
      top: 122px;

      background: #cbba64;
      border-radius: 4px;
    }
  }

  .card-bottom {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .card-bottom-number {
    }
    .card-bottom-info {
      width: 100%;
      margin-bottom: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

interface CardProps {
  brand: string;
  name: string;
  month: string;
  year: string;
  numbers: string[];
}

const Card = ({ brand, name, month, year, numbers }: CardProps) => {
  return (
    <CardBlock>
      <div className="card-top">{brand}</div>
      <div className="card-middle">
        <div className="chip" />
      </div>
      <div className="card-bottom">
        <div className={"card-bottom-number"}>{numbers.join(" - ")}</div>
        <div className={"card-bottom-info"}>
          <div className="name">{name}</div>
          <div className="date">
            {month}/{year}
          </div>
        </div>
      </div>
    </CardBlock>
  );
};

export default Card;
