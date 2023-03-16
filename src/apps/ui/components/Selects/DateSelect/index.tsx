import React, { ChangeEvent, useRef, useState } from 'react'
import * as S from './styles'

import { ReactComponent as CalendarIcon } from '../../../assets/icons/calendar.svg'

export type Option = {
  id: number;
  label: string;
  originalLabel: string;
}

type Props = {
  title: string;
  selectedDate: string;
  onChange: (e: any) => void
}

const DefaultSelect = ({ title, selectedDate, onChange }: Props) => {

  const inputRef = useRef<null | HTMLInputElement>(null)

  const onPick = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const handleTrigger = () => {
    inputRef.current?.showPicker()
  }

  return (
    <S.Box>
      <S.FilterTitle>{title}:</S.FilterTitle>
      <S.InputArea>
        <S.DateInput type={'date'}
          value={selectedDate}
          ref={inputRef}
          onChange={onPick}
          showingDate={inputRef.current?.value ? true : false}
        />
        <CalendarIcon width={24} onClick={handleTrigger} />
      </S.InputArea>






      {/* <S.Select>
        <S.SelectMain onClick={() => setDisplayingOptions(!displayingOptions)} >
          <S.SelectTitle>{activeFilter.label}</S.SelectTitle>
          <ArrowIcon width={12} />
        </S.SelectMain>
        <S.OptionsArea display={String(displayingOptions)}>
          {options.map((op, k) => (
            <S.Option key={k} onClick={() => onPick(op)}>{op.label}</S.Option>
          ))}
        </S.OptionsArea>
      </S.Select> */}
    </S.Box>
  )

}


export default DefaultSelect