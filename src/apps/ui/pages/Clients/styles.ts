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

export const Header = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
`

export const FilterArea = styled.div`
  margin:20px 0 40px;
`
