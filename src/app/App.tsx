import { AppWrapper } from './styled'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const App = () => {
  return (
    <AppWrapper>
      <Sidebar />
      <Content />
    </AppWrapper>
  )
}

export default App