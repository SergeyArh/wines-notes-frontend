import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100%;
`;

const Row = styled.div<{ color: string }>`
  display: flex;
  background-color: ${(props) => props.color};
  flex: 1 1 0;
`;

const COLORS = [
  "#9ABA79",
  "#ECD621",
  "#FEBD3B",
  "#F9954A",
  "#F98078",
  "#FD5562",
  "#A4535C",
  "#794753",
  "#CD7A5A",
];

export const Pallete = ({ children }: any) => {
  return (
    <Wrapper>
      {COLORS.map((color, index) => (
        <Row color={color} key={index} />
      ))}
      {children}
    </Wrapper>
  );
};
