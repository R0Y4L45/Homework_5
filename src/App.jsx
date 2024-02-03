import { useContext } from 'react'
import MainPage from './mainPage/MainPage'
import LogIn from './logIn/LogIn'
import Context from './ContextWrapper';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';


function App() {
  const { authorized } = useContext(Context);

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' replace />} />
      {
        authorized ?
          (<Route path='/mainpage' element={<MainPage />} />)
          :
          (<Route path='/login' element={<LogIn />} />)
      }
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App