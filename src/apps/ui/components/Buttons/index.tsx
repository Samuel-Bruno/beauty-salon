import React from 'react'
import Model1 from './Model1'
import Model2 from './Model2';


type Props = {
  type: 'model1' | 'model2'
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
}

const Button = ({ type, Icon, title }: Props) => {

  let Btn = null;
  switch (type) {
    case 'model1':
      Btn = Model1
      break;
    case 'model2':
      Btn = Model2
      break;
    default:
      Btn = Model1
      break;
  }

  return (Icon) ?
    <Btn Icon={Icon} title={title} /> :
    <Btn title={title} />

}


export default Button