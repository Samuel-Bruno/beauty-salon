import styled from "styled-components"
import { root } from "../../assets/styles.main"


export const Box = styled.div<{ active: boolean; }>`
  width:100%;

  a {
    text-decoration:none;
    color:white;
    display:flex;
    gap: 10px;
    align-items:center;
    font-family:Lato;
    font-weight:500;
  }
  padding:5px 0 5px 15px;
  background-color:${p => p.active ? root.colors.primary : root.colors.secondary};
  border-radius:6px;

  &:hover {
    background-color:${root.colors.primary};
  }
`

export const Text = styled.span`
  font-size:${root.sizes.small.s4};
`
