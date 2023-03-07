import React from 'react'
import * as S from './styles'

import UserProfileExampleImage from '../../assets/images/2.jpg'

const SideBar = () => {


  return (
    <S.Box>
      <S.UserArea>
        <S.ProfileContainer>
          <img src={UserProfileExampleImage} alt="Sua foto de perfil" />
        </S.ProfileContainer>
        <S.UserEmail>voce.usuario@hotmail.com</S.UserEmail>
      </S.UserArea>
    </S.Box>
  )

}


export default SideBar