import { AppProvider } from './Core/Context/AppProvider'
import HomeView from './Features/Home/presentation/page/HomeView'


function App() {

  return (
    <AppProvider>
      <HomeView />
    </AppProvider>
  )
}

export default App
