import { create } from "zustand"
import { SystemInterface } from "./slices/system"
import UserSlice, { UserInterface } from "./slices/UserSlice"


export const useStore = create<{
  user: UserInterface,
  system: SystemInterface,
}>((set) => ({
  user: {
    logged: false,
  },
  system: {
    activePage: '/'
  }
  // setUserPhoto
  // ...UserSlice
})

)