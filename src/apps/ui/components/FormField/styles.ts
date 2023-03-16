import styled from "styled-components"
import { root } from "../../assets/styles.main"


export const Box = styled.label`
  display:flex;
  flex-direction:column;
  gap:4px;
`

export const Title = styled.span`
  font-size:${root.sizes.small.s2};
`

export const Input = styled.input``

export const TimesArea = styled.div`
  width:100%;
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:10px;
`

export const TimeOption = styled.div<{ picked: boolean; }>`
  padding:3px 9px;
  font-size:${root.sizes.small.s3};
  font-weight:300;
  color:${p => p.picked ? 'white' : root.colors.primary};
  border:1px solid ${root.colors.primary};
  border-radius:4px;
  background-color:${p => p.picked ? root.colors.primary : 'white'};
  cursor:pointer;
`