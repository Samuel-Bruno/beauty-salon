import styled from "styled-components"
import { root } from "../../../assets/styles.main"


export const Box = styled.div`
  position:relative;
  display:flex;
  align-items:center;
  gap:10px;
`

export const FilterTitle = styled.span`
  font-size:${root.sizes.small.s3};
`

export const InputArea = styled.div`
  position:relative;
  flex:1;
  color:${root.colors.primary};

  svg {
    position:absolute;
    top:50%;
    right:2px;
    transform:translateY(-50%);
    cursor:pointer;
  }
`

export const DateInput = styled.input<{ showingDate: boolean; }>`
  width:150px;
  padding:6px 10px;
  border-radius:4px;
  outline:none;
  border:1px solid ${root.colors.blackScale.p3};

  &::-webkit-calendar-picker-indicator {
    display:none;
  }
  
  &::-webkit-datetime-edit-text,
  &::-webkit-datetime-edit-month-field,
  &::-webkit-datetime-edit-day-field,
  &::-webkit-datetime-edit-year-field {
    color: ${p => p.showingDate ? `${root.colors.blackScale.p10}` : 'transparent'};
  }
`
