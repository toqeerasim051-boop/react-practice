import React from 'react'
import UserProviderContext from './context/UserProviderContext'
import Login from './component/Login'
import Profile from './component/Profile'


function App() {
 

  return (
    <UserProviderContext>
     <h1>React with chai and share is important</h1>
     <Login/>
     <Profile/>
    </UserProviderContext>
  )
}

export default App
