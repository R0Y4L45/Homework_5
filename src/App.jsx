import { useContext } from 'react'
import MainPage from './mainPage/MainPage'
import LogIn from './logIn/LogIn'
import Context from './ContextWrapper';


function App() {
  const { authorized } = useContext(Context);

  return (authorized ? <MainPage /> : <LogIn />);
}

export default App