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
  border:1px solid ${root.colors.primary};
  border-radius:6px;
  padding:.4em 1.2em;
  cursor:pointer;
`

export const Title = styled.span`
  font-family:Lato;
  font-size:${root.sizes.small.s3};
  font-weight:600;
  color:currentColor;
`