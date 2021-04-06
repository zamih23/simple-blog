import styled from "styled-components";

export const Container = styled.div`
  min-height: 200px;
  min-width: 97.7%;
  background: #c0c0c0;
  flex: 0.2;
  margin: 15px;
  border-radius: 5px;
  border: none;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: black;
`;

export const Text = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  text-align: center;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  font-size: ${(props) => props.size};
`;

const TitleText = styled.span``;
