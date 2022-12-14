import styled from "@emotion/styled";

export const BtnBox = styled.div`
display: flex;
justify-content: center;
align-items:center;
`

export const BtnChoose = styled.button`
margin-right:10px;
padding:8px;
border-radius: 5px;
border: solid 1px;
color: white;
background-color: rgba(11, 11, 11, 0.538);
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
0px 2px 2px rgba(0, 0, 0, 0.12);
cursor:pointer;
:hover,
:focus{
  background-color: rgba(99, 220, 253, 0.763);
  color: rgba(2, 2, 2, 0.823);
  border-color: transparent;
transition-duration: 250ms;
}
`