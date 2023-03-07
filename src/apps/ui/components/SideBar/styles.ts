import styled from "styled-components"
import { root } from "../../assets/styles.main"


export const Box = styled.div`
  width:260px;
  height:100%;
  background-color:${root.colors.secondary};
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:30px 0;
`

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:100%;
`

export const ProfileContainer = styled.div`
  overflow:hidden;
  width:80px;
  height:80px;
  border-radius:80px;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const UserArea = styled.div`
  align-items:center;
  display:flex;
  flex-direction:column;
  gap:10px;

  img {
    height:80px;
  }
`

export const UserEmail = styled.span`
  font-size:${root.sizes.small.s3};
  font-family:'Lato';
  color:${root.colors.blackScale.p5};
`

export const MenuArea = styled.nav`
  display:flex;
  flex-direction:column;
  gap:5px;
  padding:0 10px;
`

export const OtherLinksArea = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
  padding:20px 20px 0;
  margin:0 30px;
  border-top: 2px solid ${root.colors.primary};
`