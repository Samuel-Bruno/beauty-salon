import styled from "styled-components"
import { root } from "../../assets/styles.main";


export const Box = styled.div<{ baseMargin: number; height: number; additionalMT: number; }>`
  position:absolute;
  margin-top:${p => p.baseMargin + p.additionalMT}px;
  border-radius:4px;
  background-color:#FFECA7;
  width:100%;
  min-height:${p => p.height}px;
  padding:${p => p.height > 50 ? '10px' :
    '0 10px; align-items:center'
  };

  display:flex;
  justify-content:space-between;
`

export const MainInfo = styled.div<{ inMinHeigh: boolean; }>`
  display:flex;
  flex-direction:column;
  ${p => p.inMinHeigh ? 'justify-content:center;' : ''}
`
export const ClientName = styled.span`
  font-size:${root.sizes.small.s2};
`
export const Service = styled.span`
  font-size:${root.sizes.small.s3};
  font-weight:600;
`
export const ServiceTime = styled.span`
  font-size:${root.sizes.small.s3};
  font-weight:600;
`