import styled from "styled-components"
import { root } from "../../../assets/styles.main"


export const Area = styled.div``

export const PageTitle = styled.div`
  display:flex;
  gap:10px;
  align-items:center;

  h1, span {
    font-family:Roboto;
    font-size:${root.sizes.big.s1};
    color:${root.colors.blackScale.p8};
  }
`

export const Header = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
`

export const BtnsTopArea = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:10px;
`

export const Principal = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  flex:1;
  gap:70px;

  h2 {
    font-family:Lato;
    font-size:${root.sizes.medium.s3};
    width:300px;
    text-align:center;
  }
`

export const Options = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:20px;
`