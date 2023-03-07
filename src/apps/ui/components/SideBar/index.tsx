import React from 'react'
import * as S from './styles'

import MenuItem from '../MenuItem'

import UserProfileExampleImage from '../../assets/images/2.jpg'
import { ReactComponent as SchedulingIcon } from '../../assets/icons/calendar.svg'

const SideBar = () => {


  return (
    <S.Box>
      <S.UserArea>
        <S.ProfileContainer>
          <img src={UserProfileExampleImage} alt="Sua foto de perfil" />
        </S.ProfileContainer>
        <S.UserEmail>voce.usuario@hotmail.com</S.UserEmail>
      </S.UserArea>
      <S.MenuArea>
        <MenuItem Icon={SchedulingIcon} linkTo={""} text="Agendamentos" />
      </S.MenuArea>
    </S.Box>
  )

}


export default SideBar