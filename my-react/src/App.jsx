import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeamMemberCard  from './Components/TeamMemberCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TeamMemberCard name={"RAM"} text={"Software Developer"}/>
      <TeamMemberCard name={"SHAM"} text={"Data Analyst"}/>
      <TeamMemberCard name={"DHYAN"} text={"Data Scientist"}/>
    </>
  )
}

export default App
