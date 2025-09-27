import './App.css'

//Import Components .jsx
import Preloading from './components/preloading/preloading'
import Navbar from './components/Navbar/navbar'
import Header from './components/Header/header'
import About from './components/about/about'
import Stats from './components/stats/stats'
import Service from './components/service/service'



function App() {
  return (
    <>
    <Preloading />
    <Navbar />

    <div className="container">
      <Header />
      <About />
      <Stats />
      < Service />
    </div>
    </>
  )
}

export default App
