import styled from "styled-components"
import { root } from "../../assets/styles.main"


export const Box = styled.div<{ active: boolean; modeltwo?: boolean; }>`
  width:100%;
  ${p => p.modeltwo === true ?
    `height:${p.active ? '139px' : '27px'}` :
    'height:auto;'
  };
  overflow:hidden;

  a {
    text-decoration:none;
    color:white;
    display:flex;
    gap: 10px;
    align-items:center;
    font-family:Lato;
    font-weight:500;
  }
  padding:5px 15px;
  background-color:${p => p.active ? root.colors.primary : root.colors.secondary};
  border-radius:6px;

  &:hover {
    background-color:${root.colors.primary};
  }

  transition:background-color .2s;
`

export const Text = styled.span`
  font-size:${root.sizes.small.s4};
`

export const UpperArea = styled.div``

export const SubLinks = styled.div`
  width:100%;
  padding:5px 0 5px 40px;
  display:flex;
  flex-direction:column;
  gap:5px;
`

export const FinancialLink = styled.div<{ active: boolean; }>`
  color:rgba(255,255,255,0.5);

  a {
    width:100%;
    color:${p => p.active === true ? 'rgba(255,255,255,1)' : 'currentColor'};
    font-size:${root.sizes.small.s3};
  }
  transition:color .2s;

  &:hover {
    color:rgba(255,255,255,1);
  }
`