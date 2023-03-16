import styled from "styled-components"
import { root } from "../../../assets/styles.main"


export const Area = styled.div`
  color:${root.colors.blackScale.p10};

  svg {
    fill:currentColor;
    cursor:pointer;
  }
`

export const ModalHeader = styled.div`
  display:flex;
  justify-content:space-between;
`

export const ModalTitle = styled.h3`
  font-size:${root.sizes.medium.s3};
`

export const ModalContent = styled.div`
  display:flex;
  gap:60px;
`

export const FormArea = styled.div`
  display:flex;
  gap:20px;
`