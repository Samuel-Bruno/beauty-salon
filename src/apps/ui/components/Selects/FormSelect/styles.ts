import styled from "styled-components"
import { root } from "../../../assets/styles.main"


export const Box = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  gap:10px;
`

export const Select = styled.div`
  border:1px solid ${root.colors.blackScale.p3};
  padding:0px 10px;
  border-radius:4px;
  width:260px;
  min-width:min-content;
  cursor:pointer;
`

export const SelectMain = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  position:relative;
  width:inherit;
  heigh:fit-content;
  color:${root.colors.primary};

  svg {
    transform:rotate(90deg);
  }
`

export const SelectTitle = styled.span`
  color:${root.colors.blackScale.p10};
  font-size:12px;
`

export const OptionsArea = styled.div<{ display: string; }>`
  display:${p => p.display === 'true' ? 'block' : 'none'};
  position:absolute;
  top:calc(100% + 5px);
  width:100%;
  max-width:inherit;
  margin-left:-10px;
  box-shadow: 0 2px 9px 2px ${root.colors.blackScale.p1};
  background-color:white;
  padding:0;
  z-index:5;
`

export const Option = styled.div`
  font-size:12px;
  padding:.5em 10px;
  transition:background-color .1s;

  &:hover {
    background-color:${root.colors.blackScale.p2};
  }
`
