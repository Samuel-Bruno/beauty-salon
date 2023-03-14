import styled from "styled-components"
import { root } from "../../assets/styles.main"


export const Box = styled.div<{ active: boolean; }>`
  border-radius:12px;
  border:1px solid ${root.colors.secondary};
  background-color:${p => p.active ? root.colors.secondary : 'white'};
  transition: background-color .2s;
  // width:34px;
  min-width:34px;
  height:18px;
  position:relative;
  cursor:pointer;
`

export const Thumb = styled.div<{ active: boolean; }>`
  min-width:12px;
  height:12px;
  border-radius:6px;
  background-color:${root.colors.primary};
  position:absolute;
  top:2px;
  left:4px;
  transform:translateX(${p => p.active ? 'calc(100% + 6px)' : '0'});
  transition:transform .3s;
`