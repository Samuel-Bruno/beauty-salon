import styled from "styled-components"
import { root } from "../../assets/styles.main"


export const Bg = styled.div<{ showing: boolean; }>`
  width:100vw;
  height:100vh;
  background-color:${root.colors.blackScale.p6};
  position:absolute;
  z-index:100;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const ContentArea = styled.div`
  padding:20px 30px 30px;
  background-color:white;
  border-radius:12px;
  box-shadow:0 4px 16px ${root.colors.blackScale.p2};
`