import styled from "styled-components"
import { root } from "../../../assets/styles.main"


export const Box = styled.button`
  background:none;
  outline:none;
  border:none;
  display:flex;
  align-items:center;
  gap:10px;
  color:${root.colors.primary};
  cursor:pointer;
  margin:0 auto;
`

export const Title = styled.span`
  font-family:Lato;
  font-size:${root.sizes.small.s2};
  font-weight:600;
  color:currentColor;
`