export interface SystemInterface {
  activePage: string;
}

const UserSlice = (system: SystemInterface) => ({
  setActivePage: (page: string) => ({
    ...system,
    activePage: page
  })
})


export default UserSlice