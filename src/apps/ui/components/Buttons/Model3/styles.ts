import styled from "styled-components"
import { root } from "../../../assets/styles.main"


export const Box = styled.button`
  background:none;
  outline:none;
  border:none;
  display:flex;
  align-items:center;
  gap:10px;
  color:${root.colors.various.blue};
  border:1px solid ${root.colors.various.blue};
  border-radius:6px;
  padding:.3em .5em;
  cursor:pointer;
`

export const Title = styled.span`
  font-family:Lato;
  font-size:${root.sizes.small.s1};
  font-weight:600;
  color:currentColor;
`