import styled from "styled-components"
import { root } from "../../assets/styles.main"


export const Box = styled.div`
  width:240px;
  height:100%;
  position:relative;
`

export const WhoIsArea = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:10px;
  width:inherit;
  position:absolute;
`

export const ImageContainer = styled.div`
  height:32px;
  width:32px;
  border-radius:32px;
  overflow:hidden;
  display:flex;
  justify-content:center;
  align-items:center;

  img {
    max-height:100%;
  }
`

export const Name = styled.span`
  font-size:${root.sizes.small.s2};
  color:${root.colors.blackScale.p5};
  font-weight:500;
`

export const Lines = styled.div<{ baseHeight: number; }>`
  display:flex;
  flex-direction:column;
  margin-top:calc(32px + 5px);
  position:relative;

  div {
    height:${p => p.baseHeight}px;
  }
`

export const Line = styled.div<{ bgColor?: string; }>`
  background-color:${p => p.bgColor ?? 'white'};
  border-bottom:2px solid ${root.colors.blackScale.p3};
  width:100%;
`
