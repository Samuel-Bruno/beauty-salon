import styled from "styled-components"
import { root } from "../../assets/styles.main"


export const Page = styled.div`
  background-color:#FFF;
  width:100vw;
  height:100vh;
  display:flex;
`

export const Main = styled.main`
  padding:20px 30px 40px;
  flex:1;
`

export const PageTitle = styled.h1`
  font-family:Roboto;
  font-size:${root.sizes.big.s1};
`

export const UpperOptions = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`

export const DateArea = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
  margin-top:23px;

  svg {
    cursor:pointer;
  }
`

export const DateText = styled.span`
  font-family:Roboto;
  font-size:${root.sizes.small.s4};
  font-weight:200;
`

export const ScheduleArea = styled.div``

export const HoursLabels = styled.div``
