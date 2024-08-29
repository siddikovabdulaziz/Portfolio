import './App.css'
import About from './component/About/About.jsx'
import Main from './component/Main/Main.jsx'
import MySkills from './component/My-Skills/MySkills.jsx'
import Navbar from './component/Navbar/Navbar.jsx'
import Portfoliyo from "./component/Portfoliyo/Portfoliyo.jsx"
import Footer from "./component//Footer/Footer.jsx"

function App() {

  return (
    <div>
        <Navbar />
        <Main />
        <MySkills />
        <About />
        <Portfoliyo />
        <Footer />
    </div>
  )
}

export default App
