import { create } from "zustand"
import { SystemStateInterface } from "./slices/SystemSlice"
import UserSlice, { UserStateInterface, UserSliceActions } from "./slices/UserSlice"


export interface StoreInterface {
  user: UserStateInterface,
  system: SystemStateInterface,
  actions: {
    user: UserSliceActions
  }
}


export const useStore = create<StoreInterface>((set) => ({
  user: {
    logged: false,
    profileImage: ''
  },
  system: {
    activePage: '/',
    baseScheduleLineHeight: 25,
    openingHour: '08:00'
  },
  actions: {
    user: UserSlice(set)
  }
}))