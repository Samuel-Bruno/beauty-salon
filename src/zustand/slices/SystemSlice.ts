import { StoreInterface } from "../store";

export interface SystemStateInterface {
  activePage: string;
}

export type SystemSliceActions = {
  setProfileImage: (img: string) => void
}

const SystemSlice = (
  (
    set: (partial: StoreInterface | Partial<StoreInterface> |
      (
        (state: StoreInterface) => StoreInterface | Partial<StoreInterface>
      )) => void
  ) => {

    return ({
      setActivePage: (page: string) => (
        set(state => ({
          ...state,
          system: {
            ...state.system,
            activePage: page
          }
        }))
      )
    })
  })


export default SystemSlice