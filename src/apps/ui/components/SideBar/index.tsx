import React from 'react'
import * as S from './styles'

import MenuItem from '../MenuItem'

import UserProfileExampleImage from '../../assets/images/2.jpg'
import { ReactComponent as SchedulingIcon } from '../../assets/icons/calendar.svg'
import { ReactComponent as ClientsIcon } from '../../assets/icons/clients.svg'
import { ReactComponent as ProfessionalsIcon } from '../../assets/icons/professionals.svg'
import { ReactComponent as ServicesIcon } from '../../assets/icons/services.svg'
import { ReactComponent as StorageIcon } from '../../assets/icons/storage.svg'
import { ReactComponent as ReportsIcon } from '../../assets/icons/reports.svg'
import { ReactComponent as FinancialIcon } from '../../assets/icons/financial.svg'
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg'
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg'

const SideBar = () => {


  return (
    <S.Box>
      <S.Container>
        <S.UserArea>
          <S.ProfileContainer>
            <img src={UserProfileExampleImage} alt="Sua foto de perfil" />
          </S.ProfileContainer>
          <S.UserEmail>voce.usuario@hotmail.com</S.UserEmail>
        </S.UserArea>
        <S.MenuArea>
          <MenuItem Icon={SchedulingIcon} linkTo={"/"} text="Agendamentos" />
          <MenuItem Icon={ClientsIcon} linkTo={"clients"} text="Clientes" />
          <MenuItem Icon={ProfessionalsIcon} linkTo={"professionals"} text="Funcionários" />
          <MenuItem Icon={ServicesIcon} linkTo={"services"} text="Serviços" />
          <MenuItem Icon={StorageIcon} linkTo={"storage"} text="Estoque" />
          <MenuItem Icon={ReportsIcon} linkTo={"reports"} text="Relatórios" />
          <MenuItem Icon={FinancialIcon} linkTo={"financial"} text="Financeiro" />
        </S.MenuArea>
        <S.OtherLinksArea>
          <MenuItem Icon={SettingsIcon} linkTo={"settings"} text="Configurações" />
          <MenuItem Icon={LogoutIcon} linkTo={"logout"} text="Sair" />
        </S.OtherLinksArea>
      </S.Container>
    </S.Box>
  )

}


export default SideBar