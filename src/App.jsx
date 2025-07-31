import { useState } from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Verification from './components/Verification'
import UserProfile from './components/UserProfile'
import Biometric from './components/Biometric'
import BannerManagement from './components/BannerManagement'
import Data from './components/Data'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Routes>
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/verify" element={<Verification/>} />
        <Route path="/userprofile" element={<UserProfile/>} />
        <Route path="/biometric" element={<Biometric/>} />
        <Route path="/banner" element={<BannerManagement Data={Data}/>} />
      </Routes>
   </>
  )
}

export default App
