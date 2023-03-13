import React from 'react'
import * as S from './styles'

import MenuItem from '../MenuItem'
import { useStore } from '../../../../zustand/store'

import { ReactComponent as SchedulingIcon } from '../../assets/icons/calendar.svg'
import { ReactComponent as ClientsIcon } from '../../assets/icons/clients.svg'
import { ReactComponent as ProfessionalsIcon } from '../../assets/icons/professionals.svg'
import { ReactComponent as ServicesIcon } from '../../assets/icons/services.svg'
import { ReactComponent as StorageIcon } from '../../assets/icons/storage.svg'
import { ReactComponent as ReportsIcon } from '../../assets/icons/reports.svg'
import { ReactComponent as FinancialIcon } from '../../assets/icons/financial.svg'
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg'
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg'


type Props = {
  activePage: string;
}

const SideBar = ({ activePage }: Props) => {

  const user = useStore(store => store.user)


  return (
    <S.Box>
      <S.Container>
        <S.UserArea>
          <S.ProfileContainer>
            <img src={user.profileImage} alt="Sua foto de perfil" />
          </S.ProfileContainer>
          <S.UserEmail>voce.usuario@hotmail.com</S.UserEmail>
        </S.UserArea>
        <S.MenuArea>
          <MenuItem Icon={SchedulingIcon} linkTo={"/"} text="Agendamentos" activePage={activePage} />
          <MenuItem Icon={ClientsIcon} linkTo={"/clients"} text="Clientes" activePage={activePage} />
          <MenuItem Icon={ProfessionalsIcon} linkTo={"/professionals"} text="Funcionários" activePage={activePage} />
          <MenuItem Icon={ServicesIcon} linkTo={"/services"} text="Serviços" activePage={activePage} />
          <MenuItem Icon={StorageIcon} linkTo={"/storage"} text="Estoque" activePage={activePage} />
          <MenuItem Icon={ReportsIcon} linkTo={"/reports"} text="Relatórios" activePage={activePage} />
          <MenuItem Icon={FinancialIcon} linkTo={"/financial"} text="Financeiro" type='model2' activePage={activePage} />
        </S.MenuArea>
        <S.OtherLinksArea>
          <MenuItem Icon={SettingsIcon} linkTo={"/settings"} text="Configurações" activePage={activePage} />
          <MenuItem Icon={LogoutIcon} linkTo={"/logout"} text="Sair" activePage={activePage} />
        </S.OtherLinksArea>
      </S.Container>
    </S.Box>
  )

}


export default SideBar