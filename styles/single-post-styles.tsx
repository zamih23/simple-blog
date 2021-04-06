import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
  `;
  export const Text = styled.span`
    margin: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    text-align: center;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    font-size: ${(props) => props.size};
  `;
  export const Button = styled.button`
    width: 100px;
    height: 35px;
    margin: 10px;
  `;