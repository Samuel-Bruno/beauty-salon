import React, { useEffect } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';
import { useStore } from './zustand/store';

import UserProfileExampleImage from './apps/ui/assets/images/2.jpg'

function App() {


  const setProfileImage = useStore(store => store.actions.user.setProfileImage)

  useEffect(() => {
    setProfileImage(UserProfileExampleImage)
  }, [setProfileImage])

  return (
    <RouterProvider router={routes} />
  )
}

export default App;
