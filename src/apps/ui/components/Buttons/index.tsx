import React from 'react'
import Model1 from './Model1'


type Props = {
  type: 'model1' | 'model2'
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
}

const Button = ({ type, icon, title }: Props) => {

  let Btn = null;
  switch (type) {
    case 'model1':
      Btn = Model1
      break;

    default:
      Btn = Model1
      break;
  }

  return <Btn Icon={icon} title={title} />

}


export default Button