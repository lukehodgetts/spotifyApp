import styled from "styled-components";
import Select from "react-select";

export const Wrapper = styled.div`
  margin: 30px 50px 50px 30px;
`;

export const ContainerLeft = styled.div`
  margin: 30px 50px 50px 30px;
  flex: 1;
`;

export const ContainerRight = styled.div`
  margin: 30px 50px 50px 30px;
  flex: 1;
`;

export const ContainerWrapper = styled.div`
  display: flex;
`;

export const Dropdown = styled(Select)`
  color: black;
  max-width: 500px;
  margin: 0 auto;
  padding: 10px 0px;
`;
