import { StoreInterface } from "../store";

export interface UserStateInterface {
  logged: boolean;
  profileImage?: string;
  userEmail?: string;
}

export type UserSliceActions = {
  setProfileImage: (img: string) => void
}

const UserSlice = (
  (
    set: (partial: StoreInterface | Partial<StoreInterface> |
      (
        (state: StoreInterface) => StoreInterface | Partial<StoreInterface>
      )) => void
  ) => {

    return ({
      setProfileImage: (img: string) => (
        set(state => ({
          ...state,
          user: {
            ...state.user,
            profileImage: img
          }
        }))
      )
    })
  })


export default UserSlice