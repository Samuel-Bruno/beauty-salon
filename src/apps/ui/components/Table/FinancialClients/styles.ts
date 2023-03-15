import styled from "styled-components"
import { root } from "../../../assets/styles.main"


export const Table = styled.table<{ iconsQnt: number }>`
  width:100%;
  border-collapse:collapse;
  position:relative;
`

export const TableHead = styled.thead`

  tr {
    position: sticky;
    top: 0;
    background-color:orange;
    z-index:3;
  }
`

export const TableColumnTitle = styled.th`
  font-size:${root.sizes.small.s3};
  font-weight:700;
  text-align:left;
  background-color:white;
  padding:10px 5px;

  &:last-child {
    text-align:center;
  }
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  width:100%;
  height:34px;
  background-color:${root.colors.blackScale.p1};
  padding:0 5px;
  position:relative;

  &:nth-child(2n+1) {
    background-color:white;
  }
`

export const TableValue = styled.td<{ isMoney: boolean; isZero?: boolean; type?: string; }>`
  div {
    display:flex;
    gap:5px;
    font-size:${root.sizes.small.s2};
    font-weight:300;
    padding: 0 5px;
    color:${p => !p.isMoney ? root.colors.blackScale.p10 :
    (p.isZero ?
      root.colors.blackScale.p3 :
      (
        p.type === 'credit' ?
          root.colors.various.green :
          root.colors.various.red
      )
    )};
  }

  &:last-child {
    div {
      justify-content:center;
    }
  }
`

export const IconsField = styled.td`
  text-align:center;
  position:absolute;
  
  padding:0 5px;
  right:0;
  transform:translateX(100%);

  svg {
    cursor:pointer;
  }
`