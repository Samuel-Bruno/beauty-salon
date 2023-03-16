import styled from "styled-components"
import { root } from "../../../assets/styles.main"


export const Table = styled.table<{ iconsQnt: number }>`
  width:calc(100% - ${p => p.iconsQnt > 0 ?
    `${(p.iconsQnt * 24) + 5}` :
    `29`
  }px);
  max-width:${p => p.iconsQnt};
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

export const Filler = styled.td<{ iconsQnt: number; }>`
  width:29px;
  width:${p => p.iconsQnt > 0 ? `${(p.iconsQnt * 24) + 5}` : `29`}px;
  height:100%;
  background-color:white;
  position:absolute;
  right:0;
  transform:translateX(100%);
`

export const TableColumnTitle = styled.th`
  font-size:${root.sizes.small.s3};
  font-weight:700;
  text-align:left;
  background-color:white;
  padding:10px 5px;
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
    width:fit-content;
    font-size:${root.sizes.small.s2};
    font-weight:300;
    padding:0 5px;
    color:${p => !p.isMoney ? root.colors.blackScale.p10 :
    (p.isZero ?
      root.colors.blackScale.p3 :
      root.colors.various.red
    )};
  }

  &:nth-child(1) {
    width:30%;
  }
`

export const IconsField = styled.td`
  text-align:center;
  position:absolute;
  padding:0 5px;
  top:0;
  right:0;
  transform:translateX(100%) translateY(10%);

  svg {
    cursor:pointer;
  }
`

export const ToggleWrapper = styled.div`
  width:30px;
  height:30px;
  border-radius:50%;
  overflow:hidden;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:blue;
`

export const Status = styled.span<{ status: boolean; }>`
  font-size:${root.sizes.small.s2};
  text-align:left;
  font-weight:300;
  color:${p => p.status === true ?
    root.colors.various.green :
    root.colors.blackScale.p3};
`