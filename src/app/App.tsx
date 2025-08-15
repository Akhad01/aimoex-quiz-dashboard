// import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { AppWrapper } from './styled'
import Content from '../components/Content'

const App = () => {
  return (
    <AppWrapper>
      <Sidebar />
      <Content />
      {/* <Outlet /> */}
    </AppWrapper>
  )
}

export default App