import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Containers/LandingPage'
import CollectPage from './Containers/CollectPage'
import NotFound from './Containers/ErrorPage'

function App() {
  return (
    <div className='h-screen w-screen p-0 m-0'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage></LandingPage>}></Route>
      <Route path='/collection/:id' element={<CollectPage></CollectPage>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App
