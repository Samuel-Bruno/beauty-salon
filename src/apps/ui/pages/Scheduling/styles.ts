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
  display:flex;
  flex-direction:column;
  position:relative;
  width:100%;
  max-width: calc(100% - 260px);
`

export const PageTitle = styled.h1`
  font-family:Roboto;
  font-size:${root.sizes.big.s1};
  color:${root.colors.blackScale.p8};
`

export const UpperOptions = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  margin:18px 0 24px;
`

export const DateArea = styled.div`
  display:flex;
  align-items:center;
  gap:10px;

  svg {
    cursor:pointer;
  }
`

export const DateText = styled.span`
  font-family:Roboto;
  font-size:${root.sizes.small.s4};
  font-weight:200;
`

export const ScheduleArea = styled.div`
  width:100%;
  flex:1;
  overflow:auto;
  display:flex;
  gap:5px;
`

export const HoursLabels = styled.div<{ baseHeight: number; }>`
  display:flex;
  flex-direction:column;
  gap:${p => ((p.baseHeight * 4) - (+root.sizes.small.s1.split('em')[0]) * 4) - 3.2}px;
  margin-top:${p => p.baseHeight}px;
  position:absolute;
  transform:translateY(36px) translateX(-110%);
  z-index:3;
`

export const HourLabel = styled.span`
  font-family:Roboto;
  font-size:${root.sizes.small.s1};
  line-height:${root.sizes.small.s1};
  transform:translateY(-50%);
`

export const BookingsArea = styled.div`
  display:flex;
  gap:20px;
`