import styled from "styled-components";
import { lighten } from "polished";

interface PopularityProps {
  popularity: number;
}

export const Container = styled.div`
  display: flex;
  margin: 20px 0px;
  background-color: #272727;
  border-radius: 10px;

  overflow: hidden;
`;

export const Body = styled.div`
  padding: 0px 10px;
`;

export const Link = styled.span`
  color: #1db954;

  :hover {
    color: ${lighten(0.1, "#1db954")};
    cursor: pointer;
  }
`;

export const Popularity = styled.h2<PopularityProps>`
  color: ${(props) => (props.popularity > 50 ? "green" : "red")};
`;

export const Header = styled.div`
  display: flex;
`;

export const Plus = styled.div`
  display: flex;
  background-color: #929292;
  margin-left: auto;
  width: 80px;
  align-items: center;
  justify-content: center;
`;
