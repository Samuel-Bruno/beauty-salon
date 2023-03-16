import React from 'react'
import { DefaultSelect } from '../Selects';
import { Option } from '../Selects/DefaultSelect';
import FormSelect from '../Selects/FormSelect';
import * as S from './styles'


type Props = {
  title: string;
  type: 'input';
  placeholder: string;
  changeTxt: (txt: string) => void;
} | {
  title: string;
  type: 'select';
  placeholder: string;
  options: any[] | null;
  activeFilter: any;
  changeFn: (val: any) => void;
}

const FormField = (props: Props) => {

  const { title, type, placeholder } = props

  if (type === 'input') {
    const { changeTxt } = props

    return (
      <S.Box>
        <S.Title>{title}</S.Title>
        <S.Input placeholder={placeholder} onChange={(e) => changeTxt(e.target.value)} />
      </S.Box>
    )
  } else {
    const { options, activeFilter, changeFn } = props

    return (
      <S.Box>
        <S.Title>{title}</S.Title>
        <FormSelect
          title={placeholder}
          options={options}
          activeFilter={activeFilter}
          onChange={(val) => changeFn(val)}
        />
      </S.Box>
    )
  }

}


export default FormField