import './App.css'

//Import Components .jsx
import Preloading from './components/preloading/preloading'
// import Navbar from './components/Navbar/navbar'
import Header from './components/Header/header'
import About from './components/about/about'
import Stats from './components/stats/stats'
import Service from './components/service/service'
import Section from './components/section/section'
import Blog from './components/blog/blog'
import Contact from './components/contact/contact'
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/navbar'

function App() {
  return (
    <>
    <Preloading />

    <Navbar />

    <div className="container">
      <Header />
      <About />
      <Stats />
      <Service />
      <Section />
      <Blog />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App
