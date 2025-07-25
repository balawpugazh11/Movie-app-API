import './App.css'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import { WatchListProvider } from './context/WatchListContext'

function App() {
  return (
    <WatchListProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/watchlist" element={<Watchlist/>}/>
    </Routes>
    </BrowserRouter>
    </WatchListProvider>
  )
}

export default App
