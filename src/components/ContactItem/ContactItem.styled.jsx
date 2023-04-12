import styled from "@emotion/styled";

export const Item = styled.li`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;
`;
export const Button = styled.button`
  padding: 0;
  display: block;
  margin: 5px;
  width: 60px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: #857678;
  cursor: pointer;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
