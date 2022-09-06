import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutScreen from './screens/AboutScreen'
import FeatureScreen from './screens/FeatureScreen'
import HomeScreen from './screens/HomeScreen'
import HowItWorksScreen from './screens/HowItWorksScreen'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/features' element={<FeatureScreen />} />
          <Route path='/how-it-works' element={<HowItWorksScreen />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
