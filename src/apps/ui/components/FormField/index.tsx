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
} | {
  title: string;
  type: 'availables';
  options: any[];
  activeTime: any;
  pickFn: (val: any) => void;
}

const FormField = (props: Props) => {

  let El = null


  const { title, type } = props

  switch (type) {
    case 'input':
      const { changeTxt } = props
      let { placeholder } = props

      El = (
        <S.Box>
          <S.Title>{title}</S.Title>
          <S.Input placeholder={placeholder} onChange={(e) => changeTxt(e.target.value)} />
        </S.Box>
      )
      break;
    case 'select':
      const { options, activeFilter, changeFn } = props
      const pcholder = props.placeholder

      El = (
        <S.Box>
          <S.Title>{title}</S.Title>
          <FormSelect
            title={pcholder}
            options={options}
            activeFilter={activeFilter}
            onChange={(val) => changeFn(val)}
          />
        </S.Box>
      )
      break;
    case 'availables':
      const [opts, activeTime, pickFn] = [props.options, props.activeTime, props.pickFn]

      El = (
        <S.Box>
          <S.Title>{title}</S.Title>
          <S.TimesArea>
            {opts.map((o, k) => (
              <S.TimeOption key={k} picked={activeTime === o} onClick={e => pickFn(o)}>
                {`${o.initialTime} - ${o.finalTime}`}
              </S.TimeOption>
            ))}
          </S.TimesArea>
        </S.Box>
      )
      break;
  }

  return El

}


export default FormField