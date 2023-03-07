export interface UserInterface {
  logged: boolean;
  profileImage?: string;
  userEmail?: string;
}

const UserSlice = (user: UserInterface) => ({
  setProfileImage: (img: string) => ({
    ...user,
    profileImage: img
  })
})


export default UserSlice