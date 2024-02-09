import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <NavBar/>
    <div className='mx-auto my-12 w-2/3'>
      <Outlet/>
    </div>
    
    </>
  )
}

export default App
