import './app.css'
import HomeHero from './components/HomeHero'
import TabBar from './components/TabBar'

function App() {

  return (
    <div className='flex flex-col p-4'>
      <TabBar />
      <HomeHero />
    </div>
  )
}

export default App
