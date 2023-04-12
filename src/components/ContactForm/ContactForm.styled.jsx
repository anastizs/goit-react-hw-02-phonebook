import styled from "@emotion/styled";

export const Form = styled.form`
  padding: 15px;
  border: 0.5px solid #371506;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 18px;
  margin: 5px;
`;

export const Input = styled.input`
  display: block;
  padding: 6px;
  width: calc(100% - 16px);
  border: 0.5px solid #371506;
  border-radius: 4px;
  margin-top: 8px;
`;

export const Button = styled.button`
  padding: 0;
  display: block;
  margin: 16px auto 0;
  width: 100px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: #857678;
  cursor: pointer;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
